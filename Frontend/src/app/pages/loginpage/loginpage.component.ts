import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
constructor(private builder:FormBuilder, private toastr:ToastrService,
  private router:Router,private service:LoginService){}

  Login=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })




  login(){

    let value = this.Login.value
    this.service.login(value).subscribe((res:any)=>{
      console.log(res)

      if(res.status === 200){
        if(res.token ){
          localStorage.setItem('token',res.token)
          this.router.navigate([''])
        }
      }
      else{
        alert("access denied")
        this.toastr.error("access denied")
      }
    
  
    })
  
  }
  
   
  get loggedin():any{
    return this.Login.controls;
  }

  

}
