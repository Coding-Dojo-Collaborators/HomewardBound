package com.homewardbound.homewardbound.services;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.homewardbound.homewardbound.models.FacebookLogin;
import com.homewardbound.homewardbound.models.GoogleLogin;
import com.homewardbound.homewardbound.models.LoginUser;
import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import io.github.cdimascio.dotenv.Dotenv;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;

    Instant now = Instant.now();
    String dotenv = Dotenv.load().get("SECRET");
    byte[] secret = Base64.getDecoder().decode(dotenv);

    public User oneUser(Long id) {
        Optional<User> user = userRepo.findById(id);
    return user.get();
    }

    // ------------Regular Login---------------- //
    public String login(LoginUser newLoginObject,BindingResult result) {

        String emailEntered = newLoginObject.getEmail();
        String passwordEntered = newLoginObject.getPassword();

        Optional<User> isUser = userRepo.findByEmail(emailEntered);
        if (!isUser.isPresent()) {
            result.rejectValue("email", "error", "No User Found");
            return null;
        }
        if (!BCrypt.checkpw(passwordEntered, isUser.get().getPassword())) {
            result.rejectValue("password", "error", "Invalid Email or Password");
            return null;
        } else {
            User user = isUser.get();
            String jwt = Jwts.builder()
                    .claim("id", user.getId())
                    .claim("firstName", user.getFirstName())
                    .claim("lastName", user.getLastName())
                    .claim("oAuthUser", user.isoAuthUser())
                    .setIssuedAt(Date.from(now))
                    .setExpiration(Date.from(now.minus(7, ChronoUnit.DAYS)))
                    .signWith(Keys.hmacShaKeyFor(secret))
                    .compact();

            return jwt;
        }
    }
    // -------------Facebook Login-------------------//
    public String facebookLogin(FacebookLogin newLogin){
        User user;
        String emailEntered = newLogin.getEmail();
        Optional<User> isUser = userRepo.findByEmail(emailEntered);
        if (!isUser.isPresent()) {
            String hashedPw = BCrypt.hashpw(newLogin.getId(), BCrypt.gensalt());
            user = new User();
            user.setFirstName(newLogin.getFirst_name());
            user.setLastName(newLogin.getLast_name());
            user.setPassword(hashedPw);
            user.setConfirm(newLogin.getId());
            user.setEmail(newLogin.getEmail());
            user.setPicture(newLogin.getPicture());
            user.setoAuthUser(true);
            userRepo.save(user);
        } else {
            user = isUser.get();
        }
        String jwt = Jwts.builder()
                .claim("id", user.getId())
                .claim("picture", user.getPicture())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .claim("oAuthUser", user.isoAuthUser())
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.minus(7, ChronoUnit.DAYS)))
                .signWith(Keys.hmacShaKeyFor(secret))
                .compact();
        return jwt;
    }
    // -------------Google Login-------------------//
    public String googleLogin(GoogleLogin newLogin) {
        User user;
        String emailEntered = newLogin.getEmail();
        Optional<User> isUser = userRepo.findByEmail(emailEntered);
        if (!isUser.isPresent()) {

            user = new User();
            user.setFirstName(newLogin.getGivenName());
            user.setLastName(newLogin.getFamilyName());
            user.setEmail(newLogin.getEmail());
            user.setPassword(newLogin.getGoogleId());
            user.setPicture(newLogin.getImageUrl());
            user.setoAuthUser(true);
            userRepo.save(user);
        } else {
            user = isUser.get();
        }
        String jwt = Jwts.builder()
                .claim("id", user.getId())
                .claim("picture", user.getPicture())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .claim("oAuthUser", user.isoAuthUser())
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.minus(7, ChronoUnit.DAYS)))
                .signWith(Keys.hmacShaKeyFor(secret))
                .compact();
        return jwt;
    }
    // ------------Registration-------------------//
    public String register(User newUser, BindingResult result) {
        String emailEntered = newUser.getEmail();
        Optional<User> isUser = userRepo.findByEmail(emailEntered);
        if (!isUser.isPresent()) {
            if (newUser.getPassword().equals(newUser.getConfirm())) {
                String hashedPw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
                User user = new User();
                user.setFirstName(newUser.getFirstName());
                user.setLastName(newUser.getLastName());
                user.setEmail(newUser.getEmail());
                user.setPassword(hashedPw);
                user.setPicture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU");
                user.setoAuthUser(false);
                userRepo.save(user);
                String jwt = Jwts.builder()
                        .claim("id", user.getId())
                        .claim("picture", user.getPicture())
                        .claim("firstName", user.getFirstName())
                        .claim("lastName", user.getLastName())
                        .claim("oAuthUser", user.isoAuthUser())
                        .setIssuedAt(Date.from(now))
                        .setExpiration(Date.from(now.minus(7, ChronoUnit.DAYS)))
                        .signWith(Keys.hmacShaKeyFor(secret))
                        .compact();
                return jwt;
            } else {
                result.rejectValue("password","password", "Passwords dont match");
                return null;
            }
        }
        result.rejectValue("email","UserExists", "Please Login in, Email already exist");
        return null;
    }
   
}
