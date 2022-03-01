package com.homewardbound.homewardbound.services;

import com.homewardbound.homewardbound.repositories.ContactUsRepoistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsService {
    @Autowired
    ContactUsRepoistory contactRepo;
    
}
