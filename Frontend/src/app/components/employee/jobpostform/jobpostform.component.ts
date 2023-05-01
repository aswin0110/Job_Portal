import { Component } from '@angular/core';
import { JobpostformService } from 'src/app/services/jobpostform.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    "Company_logo": new FormControl(''),
    "Company_Name": new FormControl(''),
    "Job_Title": new FormControl(''),
    "Job_location": new FormControl(''),
    "Salary": new FormControl(''),
    "job_skill": new FormControl(''),
    "start_Date": new FormControl(''),
    "description": new FormControl(''),
    "Employment_Type": new FormControl('')
  
  })
  minDate: Date;
  maxDate: Date;
  
  constructor( private apiservice:JobpostformService, private toastr:ToastrService )
   {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   

  }

 
  

   onSubmit(){
      
     console.log(this.jobform.value)
    this.apiservice.addjobpost(this.jobform.value).subscribe(res=>{
    
      console.log(res)
      this.toastr.success("job added successfully")
    })
    
  
  }

  // onSubmit() {
  //   const formData = this.jobform.value;
  //   console.log(formData);
    
  //   if (!Object.values(formData).every(value => !!value)) {
  //     alert('Please enter all data');
  //   } else {
  //     console.log(formData);
  //     this.apiservice.addjobpost(formData).subscribe(res => {
  //       console.log(res);
  //       alert('Job added successfully');
  //     });
  //   }
  // }
  


  
 
}
