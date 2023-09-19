import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  formData = new FormGroup({
   
    id: new FormControl(this.routers.snapshot.params['id'], Validators.required),
    heading: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required)

  })
  // error = false
  avgRating : any

  get id() { return this.formData.get('id') }
  get heading() { return this.formData.get('heading') }
  get rating() { return this.formData.get('rating') }
  get review() { return this.formData.get('review') }

  constructor(private routers: ActivatedRoute, private product: ProductService, private router: Router) { }

  products: any
  reviews: any
  r: any
  ngOnInit(): void {
    if (localStorage.getItem("logged") == "false") {
      this.router.navigate(['/login']);
    }
    this.product.getID(this.routers.snapshot.params['id']).
      subscribe((result) => {
        this.products = result
      }
      )
    this.product.getreview(this.routers.snapshot.params['id']).subscribe((res) => {
      this.reviews = res
      this.averageRating();
    }) 
  }

  back() {
    this.router.navigate(['']);
  }

  postreview() {
    if (localStorage.getItem("logged") == "false") {
      this.router.navigate(['/login']);
    }
    this.product.postaskreview(this.formData.value).subscribe((result) => {
      this.r = result
    })
    alert("Review sent for Approval");
    this.formData.reset();
    location.reload(); 
  }

  averageRating(){
    let totalRating = 0;
    let productCount = this.reviews.length;

    for(const review of this.reviews){
      totalRating +=review.rating
    }
    let averageRating = totalRating/productCount;
    this.avgRating = averageRating.toFixed(1);
    console.log(this.avgRating)
  }
}
