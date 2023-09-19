package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="serviceability")
public class Serviceability {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int sid;
	 @Column(name="id")
	int id;
	 @Column(name="heading")
		String heading;
	 @Column(name="rating")
		float rating;
	 @Column(name="review")
		String review;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public Serviceability(int sid, int id, String heading, float rating, String review) {
		super();
		this.sid = sid;
		this.id = id;
		this.heading = heading;
		this.rating = rating;
		this.review = review;
	}
	public Serviceability() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	 
}