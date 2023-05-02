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
   showNavItem: any;

  constructor(private apitoken:TokenInterceptorService){
    
  }

  ngOnInit(){
    this.showNavItem = localStorage.getItem('name') ;
    console.log(this.showNavItem);
    
    

  }


  hideElement() {

    
    // this.isElementHidden = false;x
    let token =localStorage.getItem('token');
    // console.log(token);

    // when clicking logout button jwt token will delete and button should be hidden
    const tokenvalue = localStorage.getItem('token')
    const userroles = localStorage.getItem('name')

    // if(userroles=='alumni'){
    //   console.log('logined user is a alumni');
      
    // }
    
    // console.log(userroles);

    // if(tokenvalue!=''){
    // this.login = tokenvalue
    // this.apitoken.removeToken() 
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    location.reload();



    //   console.log('logout button popup');
    //   alert('successfully lgouted');
      
      
    // }
    // else{
    //   console.log('please login');

    // }
    

    
    
  }

}
