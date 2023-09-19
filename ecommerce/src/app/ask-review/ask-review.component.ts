import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-ask-review',
  templateUrl: './ask-review.component.html',
  styleUrls: ['./ask-review.component.sass']
})

export class AskReviewComponent implements OnInit {
  productCode: string;
  productName: string;
  brand: string;
  submitted: boolean = false;
  errorMessage: string = '';
  id: any
  parse: any
  constructor(private router: Router, private http: HttpClient, private product: ProductService) {
    this.productCode = '';
    this.productName = '';
    this.brand = '';
  }
  submitReview() {
    if (this.productCode && this.productName && this.brand) {
      this.product.getCode(this.productCode).subscribe(
        (response: any) => {
          for (let i = 0; i < response.length; i++) { this.id = response[i].id }
          console.log(response)
          if (response.length > 0) {
            this.errorMessage = 'Product already exists. Redirecting to the review page in 5 seconds.';
            setTimeout(() => {

              this.router.navigate(['/productDetails', this.id]);

            }, 2000);

          } else {

            this.errorMessage = "Product doesn't exists. ";

            setTimeout(() => {

              this.router.navigate(['']);

            }, 2000);
          }

        },

        (error: any) => {
          console.error(error);
        }
      );
    }
  }
  ngOnInit(): void {
  }
}