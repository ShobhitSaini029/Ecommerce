import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { UserDetailsService } from '../user-details.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  Homepage = new FormGroup({
    search: new FormControl('', Validators.required),
    filter: new FormControl('name', Validators.required)

  })
  error = false
  userName : any;
  user=false;
  productCount: any;
  get search() { return this.Homepage.get('search') }
  constructor(private product: ProductService, private router: Router,private userDetails : UserDetailsService ) { }
  // private userDetails : UserDetailsService
  products: any
  userCount: any
  reviewCount : any
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="true"){
      this.user=true;
    }
    // Getting list of products.
    this.product.getProducts().subscribe((result) => {
      this.products = result

    })
    // Getting number of users
    this.product.getUserCount().subscribe((result)=>{
      this.userCount=result;
    })
    // Getting review count
    this.product.getReviewCount().subscribe((result)=>{
      this.reviewCount=result;

    })
    // Getting number of products.
    this.product.getProductCount().subscribe((result)=>{
      this.productCount=result;

    })
    // Getting the user name using shared services.
    this.userName = this.userDetails.getUserName();
  }

  logout()
  {
    localStorage.setItem("logged","false")
    this.router.navigate(['/login']);
  }
  details(id: any) {
   
    this.router.navigate(['/productDetails/' + id]);
  }

  login() {
    
    this.router.navigate(['/login']);
  }

  Search() {
   
    if (this.Homepage.value.filter == "name") {
      this.product.getName(this.Homepage.value.search).subscribe((result) => {
        this.products = result
      })

    }

    if (this.Homepage.value.filter == "brand") {
      this.product.getBrand(this.Homepage.value.search).subscribe((result) => {
        this.products = result
      })

    }

    if (this.Homepage.value.filter == "code") {
      this.product.getCode(this.Homepage.value.search).subscribe((result) => {
        this.products = result
      })

    }
  }
}
