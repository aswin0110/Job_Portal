import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobpostformComponent } from '../jobpostform/jobpostform.component';
@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent {
constructor(private dialogRef: MatDialog){}

openDialogue(){
  this.dialogRef.open(JobpostformComponent);
}
}
