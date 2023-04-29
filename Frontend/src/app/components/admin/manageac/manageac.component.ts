import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeracComponent } from '../employerac/employerac.component';
import { AdminpageService } from 'src/app/services/adminpage.service';

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

  ngOnInit(){
    this.showallempac()
  }
  showallempac(){

    this.api.getemployerac().subscribe((res:any)=>{
      this.accounts = res
      // console.log(this.accounts);
      
    })
    
  }

}
