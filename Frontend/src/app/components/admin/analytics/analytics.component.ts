import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminpageService } from 'src/app/services/adminpage.service';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  
  constructor(private router:Router, private api:AdminpageService){}
  emplocount:any
  alumncount:any


  ngOnInit(){
    this.getemplcount()
    this.getalucount()

  }

  getemplcount(){
    this.api.employercount().subscribe((res:any)=>{
      // console.log(res);
      this.emplocount = res

      
    })
  }

  getalucount(){
    this.api.alumnicount().subscribe((res:any)=>{
      // console.log(res);
      this.alumncount = res
      
    })
  }

  

  



}
