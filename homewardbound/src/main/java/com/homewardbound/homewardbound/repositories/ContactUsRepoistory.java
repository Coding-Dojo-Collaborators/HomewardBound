package com.homewardbound.homewardbound.repositories;

import java.util.List;

import com.homewardbound.homewardbound.models.contactUs.ContactUs;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ContactUsRepoistory extends CrudRepository<ContactUs, Long> {
    List<ContactUs> findAll();
}
