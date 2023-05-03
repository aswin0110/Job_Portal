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

  employer: any;
  id:any;


  editform:any = new FormGroup({
    companyname:new FormControl(''),
    link:new FormControl(''),
    hrname:new FormControl(''),
    address:new FormControl(''),
    location:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor( private manageservice:ManageacemployeeService , private router:ActivatedRoute , private route:Router) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.manageservice.getemployer(id).subscribe((employer) => {
      this.employer = employer;
    });
  }
  
  onSubmit() {
    this.manageservice.updateEmployer(this.employer,this.id).subscribe((result) => {
      console.log(result);
    });
  }
}
