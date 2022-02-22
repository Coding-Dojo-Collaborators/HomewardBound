package com.homewardbound.homewardbound.resprositories;

import java.util.List;

import com.homewardbound.homewardbound.models.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAll();  
}