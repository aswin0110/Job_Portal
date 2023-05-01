import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{

  hide = true
  loginForm!: FormGroup;
  submitted = false

  status = ""


constructor(private builder:FormBuilder, private toastr:ToastrService,
  private router:Router,private service:LoginService){}

  // Login=new FormGroup({
  //   email:new FormControl('',[Validators.email,Validators.required]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(8)])
  // })
  ngOnInit(): void {
    //validations

    this.loginForm = this.builder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    })
  }

  // get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true
    
    if(this.loginForm.invalid){
      return
    }
    else{
      
      let data = this.loginForm.value
 
      this.service.login(data).subscribe( res=> {
        let userData:any = res

        
        if(userData.status == "1"){
          console.log(userData.status)
          this.status = "Account doesn't exists"
          // this.status = "Account doesn't exists"
this.toastr.success('logged successfully')
this.router.navigateByUrl('career')

          return

        }else if(userData.status == "2"){
          console.log(userData.status)
          this.status = "Invalid credentials"
this.toastr.error('Invalid credentials')

          return 
        }
        
        localStorage.setItem('token', userData[1])
        localStorage.setItem('id', userData[0][0]._id)
        localStorage.setItem('user', userData[0][0].userName)
    
         
        this.router.navigateByUrl('')
      })
    }
  }



 
 
 
 
 
 
 
 
 
  get loggedin():any{
    return this.loginForm.controls;
  }

  

}
