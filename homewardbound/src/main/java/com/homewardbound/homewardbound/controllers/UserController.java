package com.homewardbound.homewardbound.controllers;

import javax.validation.Valid;

import com.homewardbound.homewardbound.models.login.FacebookLogin;
import com.homewardbound.homewardbound.models.login.GoogleLogin;
import com.homewardbound.homewardbound.models.login.LoginUser;
import com.homewardbound.homewardbound.models.login.User;
import com.homewardbound.homewardbound.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService userService;
// -------------Google Login-------------------//
    @PostMapping("/api/google/login")
    public ResponseEntity<String> googleLogin(@RequestBody GoogleLogin googleUser){
        String loginResponse =  userService.googleLogin(googleUser);
        
            return new ResponseEntity<String>(loginResponse,HttpStatus.valueOf(200));
            
    }
//------------Regular Login---------------- //
    @PostMapping("/api/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginUser newLogin,BindingResult result){
        
        String loginResponse =  userService.login(newLogin,result);
        if(result.hasErrors()){
            return new ResponseEntity<>(result.getFieldErrors(),HttpStatus.valueOf(206));
        }
            return  new ResponseEntity<String>(loginResponse,HttpStatus.valueOf(200));
    }
// -------------Facebook Login-------------------//
    @PostMapping("/api/facebook/login")
    public ResponseEntity<String> facebookLogin(@RequestBody FacebookLogin facebookUser){
        String loginResponse = userService.facebookLogin(facebookUser);
        return new ResponseEntity<String>(loginResponse,HttpStatus.valueOf(200));
    }
//------------Registration-------------------//
    @PostMapping("/api/register")
    public ResponseEntity<?> register(@Valid @RequestBody User newUser,BindingResult result){
        String potentialUser = userService.register(newUser, result);
        if(result.hasErrors()){
            return new ResponseEntity<>(result.getFieldErrors(),HttpStatus.valueOf(206));
        }
        return new ResponseEntity<String>(potentialUser,HttpStatus.valueOf(200));
    }
//------------Admin Check-------------------//
    @PostMapping("/api/admin")
    public ResponseEntity<?> admin(@RequestBody User potentialAdmin){
        User Admin =  userService.oneUser(potentialAdmin.getId());
        ResponseEntity<String> isAdmin = Admin.isAdmin() ? new ResponseEntity<String>("Admin",HttpStatus.valueOf(200)) : new ResponseEntity<String>("Not Admin", HttpStatus.valueOf(206));
        return isAdmin;
    }
}
