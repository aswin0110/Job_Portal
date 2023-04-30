import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobApplicationUpdateComponent } from '../job-application-update/job-application-update.component';

@Component({
  selector: 'app-alumni-manage-jobpost',
  templateUrl: './alumni-manage-jobpost.component.html',
  styleUrls: ['./alumni-manage-jobpost.component.css']
})
export class AlumniManageJobpostComponent {


  constructor(private dialogRef: MatDialog ){}


  updateApplication(){
    this.dialogRef.open(JobApplicationUpdateComponent);
  }
}
