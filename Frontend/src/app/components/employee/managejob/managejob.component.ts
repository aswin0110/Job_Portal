import { Component,OnInit } from '@angular/core';
import { ManageacemployeeService } from 'src/app/services/manageacemployee.service';
import { Job } from '../../../models/job.model'
// interface Job {
//   _id: string;
//   Company_Logo: string;
//   Company_Name: string;
//   Job_Title: string;
//   Job_locaion: string;
//   role: string;
//   firstname: string;
//   lastname: string;
//   email:string;
//   phone:string;
//   course:string;
//   highestQualification:string;
//   percentage:string;
//   skills:string;
//   resumeLink:string;
//   adminverify: boolean;
// }

@Component({
  selector: 'app-managejob',
  templateUrl: './managejob.component.html',
  styleUrls: ['./managejob.component.css']
})

export class ManagejobComponent implements OnInit{

  jobs : any;
  

  constructor(private service: ManageacemployeeService) { }
 

  ngOnInit() {
    this.service.getVerifiedJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }


}
