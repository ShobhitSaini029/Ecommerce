package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.AdminReview;

import com.repo.AdminReviewRepo;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class AdminController {
	
	@Autowired
	AdminReviewRepo repo;
	
	@PostMapping(path="/askreview",consumes= {"application/json"})
	
    public boolean insertAskReview(@RequestBody AdminReview review) 
    {
        repo.save(review);
        return true;
    }
    @GetMapping("/askreview")
    public List<AdminReview> getAskReviews(){
        return repo.findAll();
    }
    
    @DeleteMapping("/denyReview/{id}")
    public boolean denyReview(@PathVariable int id) {
        repo.deleteById(id);
        return true;
    }
}
