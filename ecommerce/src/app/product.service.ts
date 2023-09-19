import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  // url="http://ec2-100-21-170-42.us-west-2.compute.amazonaws.com:8081/"
  url="http://localhost:9010/"

  constructor(private http:HttpClient) { }

  getlogin(email: any)
  {
    return this.http.get(this.url+"users/"+email);
  }

  postregister(data: any)
  {
    return this.http.post(this.url+"users",data);
  }

  postreview(data: any)
  {
    return this.http.post(this.url+"serviceability",data);
  }

  getreview(id: any){
    return this.http.get(this.url+"serviceability/id/"+id);
  }

  getProducts()
  {
    return this.http.get(this.url+"products");
  }

  getCode(code: any)
  {
    return this.http.get(this.url+"products/code/"+code);
  }
  
  getName(name: any)
  {
    return this.http.get(this.url+"products/name/"+name);
  }

  getBrand(brand: any)
  {
    return this.http.get(this.url+"products/brand/"+brand);
  }

  getID(id: any)
  {
    return this.http.get(this.url+"products/id/"+id);
  }
  getUserCount()
  {
    return this.http.get(this.url+"users/count");
  }

  getReviewCount()
  {
    return this.http.get(this.url+"serviceability/count");
  }
  getProductCount()
  {
    return this.http.get(this.url+"product/count");
  }
  
  postaskreview(data: any){
    return this.http.post(this.url+"askreview",data)
  }

  getaskreview(){
    return this.http.get(this.url+"askreview")
  }
  
  deleteaskreview(id:any){
    return this.http.delete(this.url+"denyReview/"+id)
  }
}




