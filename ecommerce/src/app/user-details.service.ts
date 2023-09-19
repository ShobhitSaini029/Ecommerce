import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private userName: string='';

  setUsername(userName : string){
    localStorage.setItem('userName', userName);
  }
  
  getUserName():string{
    const storedUserName = localStorage.getItem('UserName');
    return storedUserName !== null ? storedUserName : '';
  }
}

