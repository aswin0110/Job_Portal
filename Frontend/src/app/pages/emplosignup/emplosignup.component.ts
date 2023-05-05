import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeracService } from 'src/app/services/employerac.service';

@Component({
  selector: 'app-emplosignup',
  templateUrl: './emplosignup.component.html',
  styleUrls: ['./emplosignup.component.css']
})
export class EmplosignupComponent {


  employerac:any
  constructor(private router:Router, private fb: FormBuilder, private api: EmployeracService){}

  data:any = new FormGroup({
    companyname:new FormControl(''),
    link:new FormControl(''),
    hrname:new FormControl(''),
    address:new FormControl(''),
    location:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })


  signupemployer() {
    const formValues = this.data.value;
    const formKeys = Object.keys(formValues);
  
    const missingValues = formKeys.filter(key => {
      return !formValues[key];
    });
  
    if (missingValues.length > 0) {
      alert('Please enter all field');
    } else {
      this.api.employersignup(formValues).subscribe(res => {
        console.log(res);
  
        this.employerac = res;
  
        if (this.employerac.status == '1') {
          alert('Signup success');
          this.router.navigateByUrl('/login');
        } else {
          alert('None');
        }
      });
    }
  }
  




}


