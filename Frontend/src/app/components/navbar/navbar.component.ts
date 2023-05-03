import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apitoken:TokenInterceptorService, private router: Router){
    
  }

  ngOnInit(){
    this.showNavItem = localStorage.getItem('name') ;
    console.log(this.showNavItem);
  }

// for dashboard
  clickme(){

    if (localStorage.getItem('name')== 'alumni'){
      this.router.navigateByUrl('/alumni')

  }
  else if(localStorage.getItem('name')== 'employer'){
    this.router.navigateByUrl('/employee')

  }
  else if(localStorage.getItem('name')== 'admin'){
    this.router.navigateByUrl('/admin')

  }
  else{
    alert('login please')
  }
  }

  // for logout
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
    localStorage.removeItem('email')
    location.reload();



    //   console.log('logout button popup');
    //   alert('successfully lgouted');
      
      
    // }
    // else{
    //   console.log('please login');

    // }
    

    
    
  }

}
