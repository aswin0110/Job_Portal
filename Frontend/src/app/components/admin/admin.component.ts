import { Component } from '@angular/core';
import { AdminpageService } from 'src/app/services/adminpage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private api:AdminpageService){}

  adminname:any
  name = localStorage.getItem('id')
  ngOnInit(){
    this.getadminnames();

  }

  getadminnames(){
    this.api.getadminname(localStorage.getItem('id')).subscribe((res:any)=>{
      this.adminname = res
      console.log();
      
    })
  }





}
