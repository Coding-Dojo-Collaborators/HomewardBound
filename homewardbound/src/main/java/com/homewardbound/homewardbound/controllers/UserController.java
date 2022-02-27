package com.homewardbound.homewardbound.controllers;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;

import com.homewardbound.homewardbound.models.GoogleLogin;
import com.homewardbound.homewardbound.models.LoginUser;
import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;

   
    
// -------------Google Login-------------------//
    @PostMapping("/api/google/login")
    public String googleLogin(@RequestBody GoogleLogin googleUser){
        String loginResponse =  userService.googleLogin(googleUser);
            return loginResponse;
        
    }

//------------Regular Login---------------- //
    @PostMapping("/api/login")
    public String login(@RequestBody LoginUser newLogin){
        String loginResponse =  userService.login(newLogin);
            return loginResponse;
    }

//------------Registration-------------------//
@PostMapping("/api/register")
public String register(@RequestBody User newUser){
    String potentialUser = userService.register(newUser);
    return potentialUser;
}



}
