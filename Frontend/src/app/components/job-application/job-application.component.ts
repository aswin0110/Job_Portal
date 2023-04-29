import { Component } from '@angular/core';
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
    
  }

  // jobDetails: jobDataModel [] = [];
  constructor(private jobServices:JobpostformService){}

ngOnInit(): void{
  let jobId = localStorage.getItem('editJobId');
  this.jobServices.getSingleJobDetails(jobId).subscribe((data) => {
    this.jobDetails = JSON.parse(JSON.stringify(data));
  });
}
}
