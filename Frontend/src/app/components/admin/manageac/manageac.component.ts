import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeracComponent } from '../employerac/employerac.component';
import { AdminpageService } from 'src/app/services/adminpage.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manageac',
  templateUrl: './manageac.component.html',
  styleUrls: ['./manageac.component.css']
})
export class ManageacComponent {

  constructor(private dialogRef: MatDialog, private api:AdminpageService){}

  openDialogue(){
    this.dialogRef.open(EmployeracComponent);
  }

  accounts:any

  email_input:any = new FormGroup({
    "email":new FormControl('')
  })
  email_status:any
  email_h:String = "aswin@gmail.com"  ;


  ngOnInit(){
    this.showallempac()
  }
  showallempac(){

    this.api.getemployerac().subscribe((res:any)=>{
      this.accounts = res
      // console.log(this.accounts);
      
    })
    
  }

  getaludata(){


    this.api.getaluprofile(this.email_h).subscribe((res:any)=>{
      this.email_status = res
      alert(res.profile.email);
      
    })
  }


  

}
