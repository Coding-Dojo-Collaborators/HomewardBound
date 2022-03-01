package com.homewardbound.homewardbound.services;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.homewardbound.homewardbound.models.login.FacebookLogin;
import com.homewardbound.homewardbound.models.login.GoogleLogin;
import com.homewardbound.homewardbound.models.login.LoginUser;
import com.homewardbound.homewardbound.models.login.User;
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
                    .claim("oAuthUser", false)
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
            user.setAdmin(false);
            user.setPicture("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");
            user.setFacebookUser(true);
            user.setGoogleUser(false);
            userRepo.save(user);
        } else {
            user = isUser.get();
            if(!user.isFacebookUser()){

                return "Email already has an account not associated with Facebook ";
            }
        }
        String jwt = Jwts.builder()
                .claim("id", user.getId())
                .claim("picture", user.getPicture())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .claim("oAuthUser", user.isFacebookUser())
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
            user.setAdmin(false);
            user.setPicture("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");
            user.setGoogleUser(true);
            user.setFacebookUser(false);
            userRepo.save(user);
        } else {
            user = isUser.get();
            if(!user.isGoogleUser()){ 
                return "Email already has an account not associated with Google ";
            }
        }
        String jwt = Jwts.builder()
                .claim("id", user.getId())
                .claim("picture", user.getPicture())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .claim("oAuthUser", user.isGoogleUser())
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
                user.setPicture("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");
                user.setGoogleUser(false);
                user.setFacebookUser(false);
                user.setAdmin(false);
                userRepo.save(user);
                String jwt = Jwts.builder()
                        .claim("id", user.getId())
                        .claim("picture", user.getPicture())
                        .claim("firstName", user.getFirstName())
                        .claim("lastName", user.getLastName())
                        .claim("oAuthUser", false)
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
