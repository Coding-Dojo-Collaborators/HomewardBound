package com.homewardbound.homewardbound.services;

import java.util.List;

import com.homewardbound.homewardbound.models.User;
import com.homewardbound.homewardbound.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;

    public List<User> allUsers() {
        return userRepo.findAll();
    }
}
