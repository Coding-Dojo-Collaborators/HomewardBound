package com.homewardbound.homewardbound.controllers;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;

import com.homewardbound.homewardbound.models.GoogleLogin;
import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.github.cdimascio.dotenv.Dotenv;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;
    
    String dotenv = Dotenv.load().get("SECRET");
    byte[] secret = Base64.getDecoder().decode(dotenv);
   
    

    @PostMapping("/api/google/login")
    public String test(@RequestBody GoogleLogin test){
        Instant now = Instant.now();
        System.out.println(test);
        int id =1;
        String jwt = Jwts.builder()
        .claim("id", id)
        .claim("firstName",test.getGivenName())
        .claim("lastName",test.getFamilyName())
        .setIssuedAt(Date.from(now))
        .setExpiration(Date.from(now.minus(1, ChronoUnit.MINUTES)))
        .signWith(Keys.hmacShaKeyFor(secret))
        .compact();

        return jwt;
    }

}
