package com.homewardbound.homewardbound.controllers;

import javax.validation.Valid;

import com.homewardbound.homewardbound.models.FacebookLogin;
import com.homewardbound.homewardbound.models.GoogleLogin;
import com.homewardbound.homewardbound.models.LoginUser;
import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
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
        System.out.println(1);
        String loginResponse =  userService.login(newLogin);
            return loginResponse;
    }

// -------------Facebook Login-------------------//
    @PostMapping("/api/facebook/login")
    public String facebookLogin(@RequestBody FacebookLogin facebookUser){
        String loginResponse = userService.facebookLogin(facebookUser);
        return loginResponse;
    }

//------------Registration-------------------//
    @PostMapping("/api/register")
    public <T> T register(@Valid @RequestBody User newUser,BindingResult result){
        System.out.println(2);
        if(result.hasErrors()){
            return (T) result.getAllErrors();
        }
        String potentialUser = userService.register(newUser);
        return (T) potentialUser;
    }

}
