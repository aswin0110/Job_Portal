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
    // this.getadminnames();
    this.getadminnam()

  }

  getadminnames(){
    this.api.getadminname(localStorage.getItem('id')).subscribe((res:any)=>{
      this.adminname = res
      console.log();
      
    })
  }

  // this only works
 adname:any = localStorage.getItem('user')


  value:any = localStorage.getItem('id')
  nameadmin:any

  getadminnam(){
    this.api.getadminnames(this.value).subscribe((res:any)=>{
      this.nameadmin = res
      console.log(this.nameadmin);
      
    })
  }





}
