package com.homewardbound.homewardbound.services;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;
import java.util.Optional;

import com.homewardbound.homewardbound.models.GoogleLogin;
import com.homewardbound.homewardbound.models.LoginUser;
import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

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

    public User oneUser(String email) {
        Optional<User> user = userRepo.findByEmail(email);
        return user.get();
    }

    public String login(LoginUser newLoginObject) {
		
		String emailEntered=newLoginObject.getEmail();
		String passwordEntered=newLoginObject.getPassword();
		
		Optional<User> isUser = userRepo.findByEmail(emailEntered);	
		if (!isUser.isPresent()) {
		return "No User Found";
			
			}
		if(!BCrypt.checkpw(passwordEntered, isUser.get().getPassword())) {
		    return "Invalid Email or Password";
		}

		else {
        User user = isUser.get();
        String jwt = Jwts.builder()
        .claim("googleUser", user.isGoogleUser())
        .claim("firstName",user.getFirstName())
        .claim("lastName",user.getLastName())
        .setIssuedAt(Date.from(now))
        .setExpiration(Date.from(now.minus(1, ChronoUnit.MINUTES)))
        .signWith(Keys.hmacShaKeyFor(secret))
        .compact();

			return jwt;
		}
	}

    public String googleLogin(GoogleLogin newLogin) {
		User user;
		String emailEntered=newLogin.getEmail();
		
		Optional<User> isUser = userRepo.findByEmail(emailEntered);	
		if (!isUser.isPresent()) {
            user = new User();
            user.setFirstName(newLogin.getGivenName());
            user.setLastName(newLogin.getFamilyName());
            user.setEmail(newLogin.getEmail());
            user.setPassword(newLogin.getGoogleId());
            user.setGoogleUser(true);
        }
		else {
            user = isUser.get();
		}
        String jwt = Jwts.builder()
        .claim("firstName",user.getFirstName())
        .claim("lastName",user.getLastName())
        .setIssuedAt(Date.from(now))
        .setExpiration(Date.from(now.minus(1, ChronoUnit.MINUTES)))
        .signWith(Keys.hmacShaKeyFor(secret))
        .compact();

        return jwt;
	}
}
