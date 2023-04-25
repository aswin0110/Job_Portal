import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{



  signupstatus:any
  msg:any

  constructor(private router:Router,private fb: FormBuilder, private signup:SignupService){}

  data:any = new FormGroup({
    name:new FormControl(null),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)])
  })


  ngOnInit(): void {
    
  }

  // signupform(data:any){
  //   console.log("frontend ", data.value);

  //   this.signup.signup(data.value).subscribe(res =>{
  //     console.log(res);

  //     if(this.signupstatus.status == '1'){
  //       console.log("signup successfull");
  //       this.router.navigateByUrl('studentProfileCreate')
        
  //     }
  //     else if(this.signupstatus.status =='2'){
  //       this.msg = 'Enter Required details'
  //     }
  //     else if(this.signupstatus.status =='0'){
  //       this.msg = 'Enter Required details'
  //     }
  //     else{
  //       console.log("signup failed");
  //       this.msg = 'Email ID alredy exists'
        
  //     }
      
  //   })
    
  // }
  signupform(data: any) {
    console.log("frontend ", data.value);
  
    this.signup.signup(data.value).subscribe(res => {
      console.log(res);
  
      // Assign response value to this.signupstatus
      this.signupstatus = res;
  
      if (this.signupstatus.status == '1') {
        console.log("signup successfull");
        this.router.navigateByUrl('studentProfileCreate')
  
      } else if (this.signupstatus.status == '2') {
        this.msg = 'Enter Required details'
      } else if (this.signupstatus.status == '0') {
        this.msg = 'Enter Required details'
      } else {
        console.log("signup failed");
        this.msg = 'Email ID already exists'
  
      }
  
    })
  
  }
  

}
