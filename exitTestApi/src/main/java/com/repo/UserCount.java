package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Users;

public interface UserCount extends JpaRepository<Users,Integer> {

}
