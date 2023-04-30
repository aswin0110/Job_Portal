import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ManageacemployeeService } from 'src/app/services/manageacemployee.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.css']
})
export class ManageaccountComponent implements OnInit {

  editform:any = new FormGroup ({
    Employer_Name: new FormControl(''),
    Designation: new FormControl(''),
    Email: new FormControl(''),
    Phone_Number: new FormControl('')
   })
  constructor( private manageservice:ManageacemployeeService , private router:ActivatedRoute , private route:Router) {}

  ngOnInit(): void {
    // this.manageservice.getCurrentdata(this.router.snapshot.params['id']).subscribe((result=>{
    //   this.editform = new FormGroup({
    //     Employer_Name: new FormControl((result as any).Employer_Name),
    //     Designation: new FormControl((result as any).Designation),
    //     Email: new FormControl((result as any).Email),
    //     Phone_Number: new FormControl((result as any).Phone_Number)

    //   })
    // console.log(this.router.snapshot.params['id'],"success")

    // }))
  }
  
}
