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

  userdata:any;
loginform = this.builder.group({
  email:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required)
})

proceedlogin(){
  if(this.loginform.valid){
    this.service.login(this.loginform.value.email).subscribe(res=>{
this.userdata=res;
console.log(this.userdata)
if(this.userdata.password===this.loginform.value.password){

}else{
  this.toastr.error('invalid credential')
}
    })
  }
}
}
