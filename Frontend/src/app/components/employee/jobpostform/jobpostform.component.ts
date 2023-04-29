import { Component } from '@angular/core';
import { JobpostformService } from 'src/app/services/jobpostform.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-jobpostform',
  templateUrl: './jobpostform.component.html',
  styleUrls: ['./jobpostform.component.css']
})
export class JobpostformComponent {

  jobform:any = new FormGroup ({
    Company_Name: new FormControl(''),
    Job_Title: new FormControl(''),
    Location: new FormControl(''),
    Salary: new FormControl(''),
    Employment_Type: new FormControl('')
  
  })
  
  constructor( private apiservice:JobpostformService ) {}

  // onSubmit(){
  //   // console.log(this.bookform.value)
  //   this.apiservice.addjob(this.jobform.value).subscribe(res=>{
    
  //     console.log(res)
  //     alert("Book added successfully")
  //   })
//   }
// [formGroup]="jobform" (ngSubmit)="onSubmit()"
}
