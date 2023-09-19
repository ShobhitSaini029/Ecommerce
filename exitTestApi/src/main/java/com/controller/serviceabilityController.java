package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Products;
import com.entity.Serviceability;
import com.entity.Users;
import com.repo.ServiceabilityRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class serviceabilityController {

	
	@Autowired
	ServiceabilityRepo repo;
	
	@PostMapping(path="/serviceability",consumes= {"application/json"})
	public boolean addreview(@RequestBody Serviceability review) 
	{
		repo.save(review);
		return true;
	}
	
	@RequestMapping("/serviceability/id/{id}")
	public List<Serviceability> getreview(@PathVariable("id") int id)
	{
		return repo.findByid(id);

	}
	
	@GetMapping(path="/serviceability/count")
    public long getReviewCount() {
        return repo.count();
    }

}
