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
     job_id: '',
     
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

  jobapply:any = {

  }
  // jobDetails: jobDataModel [] = [];
  constructor(private jobServices:JobpostformService, private router:Router){}

ngOnInit(): void{
  let jobId = localStorage.getItem('editJobId');
  this.jobServices.getSingleJobDetails(jobId).subscribe((data) => {
    this.jobapply = JSON.parse(JSON.stringify(data));
    console.log("hai",this.jobapply);
    
  });
}

applyJob() {
  this.jobDetails.Company_Name = this.jobapply.Company_Name
  this.jobDetails.job_id = this.jobapply._id
  this.jobDetails.Job_Title = this.jobapply.Job_Title
  this.jobDetails.Job_locaion = this.jobapply.Job_locaion
  console.log("aaaaaaaa",this.jobDetails);
  this.jobServices.applyJob(this.jobDetails).subscribe((res) => {
      console.log(res);
      alert('Job applied Sucessfully');
      this.router.navigate(['/alumni/manageJobPost'])
    }, err=>{
      alert("Not able to apply for this job")
      console.log(err);
    });
}

}
