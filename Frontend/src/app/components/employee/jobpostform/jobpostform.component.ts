import { Component } from '@angular/core';
import { JobpostformService } from 'src/app/services/jobpostform.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
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

  // jobForm: FormGroup;
  

  // jobform:any = new FormGroup ({
  //   "Company_logo": new FormControl(''),
  //   "Company_Name": new FormControl(''),
  //   "Job_Title": new FormControl(''),
  //   "Job_location": new FormControl(''),
  //   "Salary": new FormControl(''),
  //   "job_skill": new FormControl(''),
  //   "start_Date": new FormControl(''),
  //   "description": new FormControl(''),
  //   "Employment_Type": new FormControl('')
  
  // })
  minDate: Date;
  maxDate: Date;
  
  constructor(private formBuilder: FormBuilder, private apiservice:JobpostformService, private toastr:ToastrService )
   {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   
//     this.jobForm = this.formBuilder.group({
//       Company_logo: ['', Validators.required],
//       Company_Name: ['', Validators.required],
//       Job_Title: ['', Validators.required],
//       Job_location: ['', Validators.required],
//       Salary: ['', Validators.required],
//       job_skill: ['', Validators.required],
//       start_Date: ['', Validators.required],
//       description: ['', Validators.required],
//       Employment_Type: ['', Validators.required]

//  });

  }
  item:any = new FormGroup({
    'Company_Logo':new FormControl(''),
      'Company_Name':new FormControl(''),
      'Job_Title': new FormControl(''),
      'Job_locaion':new FormControl(''),
      'Salary': new FormControl(''),
      'job_skill':new FormControl(''),
      'start_Date': new FormControl(''),
      'description':new FormControl(''),
      'Employment_Type': new FormControl('')
  })
  poststatus:any



 
  

  // submitJob(){
      
  //   if(this.jobForm.valid){
  //     this.apiservice.addjobpost(this.jobForm.value).subscribe(res=>{
    
  //       console.log('job posted successfully',res)
  //       this.toastr.success("job added successfully")
  //     },
  //     error=>{
  //       console.log('error posting job:',error);
  //     }
  //     );
  //   }
   
    

    
  
  // }

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
  
  onSubmitpost(){
    this.apiservice.jobposttocareer(this.item.value).subscribe(res=>{
      this.poststatus = res
      if(this.poststatus.status=='1'){
        this.toastr.success('signup successfully')
        console.log(this.item);
        
        
      }
      else{
        alert('something went wrong')
      }
    })
  }

  
 
}
