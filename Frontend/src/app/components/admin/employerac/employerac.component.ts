import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeracService } from 'src/app/services/employerac.service';


@Component({
  selector: 'app-employerac',
  templateUrl: './employerac.component.html',
  styleUrls: ['./employerac.component.css']
})
export class EmployeracComponent {

  employerac:any

  constructor(private router:Router, private fb: FormBuilder, private api:EmployeracService){}

  data:any = new FormGroup({
    companyname:new FormControl(''),
    link:new FormControl(''),
    hrname:new FormControl(''),
    address:new FormControl(''),
    location:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  ngOnInit():void{

  }
  signupemployer(){
    this.api.employersignup(this.data.value).subscribe(res=>{
      console.log(res);

      this.employerac = res

      if(this.employerac.status =='1'){
        
      alert('signup success')
      this.router.navigateByUrl('/admin/manage')

      }
      else{
        alert('none')
      }

      
    })
  }


}
