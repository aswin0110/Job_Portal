import { Component } from '@angular/core';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isElementHidden = false;
   login = '';
  constructor(private apitoken:TokenInterceptorService){}

  hideElement() {

    
    // this.isElementHidden = false;x
    this.apitoken.removeToken() 
    
  }

}
