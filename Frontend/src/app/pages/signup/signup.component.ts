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
  

  constructor(private router:Router,private fb: FormBuilder, private api:SignupService){}

  // data:any = new FormGroup({
  //   name:new FormControl(null),
  //   email: new FormControl(null,[Validators.required, Validators.email]),
  //   password: new FormControl(null,[Validators.required, Validators.minLength(6)])
  // })

  data:any = new FormGroup({
    "name":new FormControl(''),
    "email":new FormControl(''),
    "password":new FormControl('')
  })


  ngOnInit(): void {
    
    
  }

  signupform(){
    // console.log(this.data.value);
    this.api.signupaccount(this.data.value).subscribe(res=>{
      // console.log(res);

      this.signupstatus = res

      if (this.signupstatus.status =='1' && this.data.name !=''){
        alert('signup successfully')
        this.router.navigateByUrl('studentProfileCreate')       
      }
      else if(this.signupstatus.status == '2'){
        this.msg = 'Enter Required details'

      }
      
      else{
        // console.log("signup failed");
        this.msg = 'Email ID alredy exists'

      }

      
      
    })




    
  }



  

}
