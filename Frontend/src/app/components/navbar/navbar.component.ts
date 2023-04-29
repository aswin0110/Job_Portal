import { Component } from '@angular/core';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isElementHidden = false;
   login = 'j';
  constructor(private apitoken:TokenInterceptorService){}

  hideElement() {

    
    // this.isElementHidden = false;x
    // let token =localStorage.getItem('token');
    // this.apitoken.removeToken() 
    // console.log(token);

    // when clicking logout button jwt token will delete and button should be hidden
    
    this.login = '' 

    
    
  }

}
