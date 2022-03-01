package com.homewardbound.homewardbound.services;

import java.util.List;

import com.homewardbound.homewardbound.models.contactUs.ContactUs;
import com.homewardbound.homewardbound.repositories.ContactUsRepoistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsService {
    @Autowired
    ContactUsRepoistory contactRepo;
    // ------------- Get All --------------//
    public List<ContactUs> getAll(){
        return contactRepo.findAll();
    }
    // -------------- Create --------------//
    public void add(ContactUs newMessage){
        contactRepo.save(newMessage);
    }
}
