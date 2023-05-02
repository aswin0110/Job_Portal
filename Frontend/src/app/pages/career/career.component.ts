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
  
  //  if jwt available go to apply else go to login
  openSingleJobDetails(jobDetail: any) {
    let jwtvalue = localStorage.getItem('token');
  
    if (jwtvalue == null || jwtvalue == '') {
      alert('Please Login To Apply');
      this.router.navigate(['login']);
    } else {
      // alert('value available');
      localStorage.setItem('editJobId', jobDetail._id.toString());
      this.router.navigate(['jobapplication']);
      console.log(jwtvalue);
    }
  }
  
}
