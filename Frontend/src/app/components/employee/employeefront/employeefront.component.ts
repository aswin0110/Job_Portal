import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobpostformService } from 'src/app/services/jobpostform.service';
@Component({
  selector: 'app-employeefront',
  templateUrl: './employeefront.component.html',
  styleUrls: ['./employeefront.component.css']
})
export class EmployeefrontComponent implements OnInit {
  constructor(private router:Router, private api:JobpostformService){}

  coursecount:any
  coursename:any
  
  ngOnInit(){
   this.getcoursecount()
   this.getcoursename()
   }

   getcoursecount(){
    this.api.coursecount().subscribe((res:any)=>{
      console.log(res);
      this.coursecount = res
    })
}

getcoursename(){
  this.api.coursename().subscribe((res:any)=>{
    console.log(res);
    this.coursename = res
  })
}
}