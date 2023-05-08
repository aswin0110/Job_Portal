import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isElementHidden = false;
   login:any = ''
   showNavItem: any;
   loginhide:any = ''

  constructor(private apitoken:TokenInterceptorService, private router: Router,private toastr:ToastrService){
    
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
    let token =localStorage.getItem('token');

    const tokenvalue = localStorage.getItem('token')
    const userroles = localStorage.getItem('name')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('user')
    location.reload();

    this.toastr.success('Logut Successfull')
    

    
    
  }

}
