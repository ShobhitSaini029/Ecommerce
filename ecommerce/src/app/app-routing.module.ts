import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AskReviewComponent } from './ask-review/ask-review.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [


  {
    component: LoginComponent,
    path: 'login'
  },

  {
    component: RegistrationComponent,
    path: 'registration'
  },

  {
    component: ProductDetailsComponent,
    path: 'productDetails/:id'
  },
  {
    component: AdminComponent,
    path: 'admin'
  },
  {
    component: HomepageComponent,
    path: ''
  },

  {
    component: AskReviewComponent,
    path: 'askreview'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
