import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeracComponent } from '../employerac/employerac.component';

@Component({
  selector: 'app-manageac',
  templateUrl: './manageac.component.html',
  styleUrls: ['./manageac.component.css']
})
export class ManageacComponent {

  constructor(private dialogRef: MatDialog){}

  openDialogue(){
    this.dialogRef.open(EmployeracComponent);
  }

}
