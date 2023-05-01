import { Component } from '@angular/core';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isElementHidden = false;
   login:any = ''
  constructor(private apitoken:TokenInterceptorService){}


  hideElement() {

    
    // this.isElementHidden = false;x
    // let token =localStorage.getItem('token');
    // console.log(token);

    // when clicking logout button jwt token will delete and button should be hidden
    const tokenvalue = localStorage.getItem('token')

    
    console.log(tokenvalue);

    if(tokenvalue!=''){
    this.login = tokenvalue
    this.apitoken.removeToken() 


      console.log('logout button popup');
      alert('successfully lgouted');
      
      
    }
    else{
      console.log('please login');

    }
    

    
    
  }

}
