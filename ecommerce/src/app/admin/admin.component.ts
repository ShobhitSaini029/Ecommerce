import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor( private product: ProductService, private router: Router) { }
  formDataArray:any
  value: any
  ngOnInit(): void {
    this.product.getaskreview().subscribe((result)=>{
      this.formDataArray = result;
    })
  }

  accept(id: any){
    const selectedData = this.formDataArray.find((data: any) => data.rid === id);
    const requestData = {
      id: selectedData.id,
      heading: selectedData.heading,
      rating: selectedData.rating,
      review: selectedData.review
    };
    this.product.postreview(requestData).subscribe((result)=>{
      this.value = result
    })
      this.product.deleteaskreview(id).subscribe((result)=>{
        this.value=result;
        location.reload();

      })
      alert("Review is added sucessfully")
  }

  reject(id:any){
    this.product.deleteaskreview(id).subscribe((result)=>{
      this.value=result;
      location.reload();
      alert("Review is deleted sucessfully")
    })
  }

  redirect(){
    this.router.navigate(['']);
  }

}
