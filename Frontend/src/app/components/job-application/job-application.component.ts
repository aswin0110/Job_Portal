import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobDataModel } from 'src/app/pages/career/jobData.Model';
import { JobpostformService } from 'src/app/services/jobpostform.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  jobDetails = {
    Company_Logo: '',
     Company_Name: '',
     Job_Title: '',
     Job_locaion: '',
     start_Date: '',
     Salary: '',
     Employment_Type: '',
     description: '',
     
     firstname: '',
     lastname: '',
     email: '',
     phone:'',
     course:'',
     highestQualification:'',
     skills:'',
     percentage:'',
     uploadResume:'',
     resumeLink:'',
    
  }
  // jobDetails: jobDataModel [] = [];
  constructor(private jobServices:JobpostformService, private router:Router){}

ngOnInit(): void{
  let jobId = localStorage.getItem('editJobId');
  this.jobServices.getSingleJobDetails(jobId).subscribe((data) => {
    this.jobDetails = JSON.parse(JSON.stringify(data));
  });
}

applyJob() {
  console.log(this.jobDetails);
  this.jobServices.applyJob(this.jobDetails)
    .subscribe((res) => {
      console.log(res);
      alert('Job applied Sucessfully');
      this.router.navigate(['/alumni/manageJobPost'])
    }, err=>{
      alert("Not able to apply for this job")
      console.log(err);
    });
}

}
