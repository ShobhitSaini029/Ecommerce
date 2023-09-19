import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string='';
  Login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  error = false

  get email() { return this.Login.get('email') }
  get password() { return this.Login.get('password') }

  constructor(private product: ProductService, private router: Router, private userNameService: UserDetailsService) { }

  ngOnInit(): void {
  }
  r: any

  login() {

    this.product.getlogin(this.Login.value.email).subscribe((result) => {
      console.warn(result)
      this.r = result

      //Admin loging details...
      if(this.Login.value.email=="abc" && this.Login.value.password=="abc")
      {
        this.router.navigate(["admin"]);
      }
      
      if (result == null) {
        this.error = true
      }
      else {
        //User login details..
        if (this.r.password == this.Login.value.password) {
          localStorage.setItem("logged", "true")
          this.router.navigate(['']); 
        }
        else {
          this.error = true
        }
      }
    })
  }
}



