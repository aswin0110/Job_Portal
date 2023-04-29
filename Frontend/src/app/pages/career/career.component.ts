import { Component } from '@angular/core';
import { JobpostformService } from 'src/app/services/jobpostform.service';
import { jobDataModel } from './jobData.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  jobDetails: jobDataModel [] = []; // Get for learner model


  constructor(private jobServices: JobpostformService, private router: Router){}


  ngOnInit(): void{
    this.jobServices.getJobDetails().subscribe((data) => {
      this.jobDetails = JSON.parse(JSON.stringify(data));
    });
  }


   // Update a learner Details
   openSingleJobDetails(jobDetail: any) {
    localStorage.setItem('editJobId', jobDetail._id.toString());
    this.router.navigate(['jobapplication'])
  }
}
