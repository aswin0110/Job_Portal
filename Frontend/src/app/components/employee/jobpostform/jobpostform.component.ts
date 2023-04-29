import { Component } from '@angular/core';
import { JobpostformService } from 'src/app/services/jobpostform.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

// interface Animal {
//   name: string;
//   sound: string;
// }

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
  minDate: Date;
  maxDate: Date;
  
  constructor( private apiservice:JobpostformService )
   {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

 
}
