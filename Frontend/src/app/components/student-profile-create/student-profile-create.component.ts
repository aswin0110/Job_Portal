import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AluminiDetailsService } from 'src/app/services/alumini-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-profile-create',
  templateUrl: './student-profile-create.component.html',
  styleUrls: ['./student-profile-create.component.css']
})
export class StudentProfileCreateComponent {

  constructor(private toastr:ToastrService,private aluminiServices:AluminiDetailsService, private router:Router){}

  AluminiProfileDetail:any= {
    firstname: '',
    lastname: '',
    email: '',
    phone:'',
    highestQualification:'',
    course:'',
    batch:'',
    placementStatus:'',
    companyName:'',
  }


  // addAluminiProfileDetails() {
  //   console.log(this.AluminiProfileDetail);
  //   this.aluminiServices.addAlumniProfileDetails(this.AluminiProfileDetail)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       if (res.status === '1') {
  //         alert('Profile details added successfully');
  //         window.location.reload();
  //       } else if (res.status === '2') {
  //         alert('Email or password cannot be blank');
  //       } else if (res.status === 'data alredy exist' || res.status === 'data already exists') {
  //         alert('Email already registered');
  //       } else {
  //         alert('Unknown error occurred');
  //       }
  //     }, err => {
  //       console.error(err);
  //       alert('Error occurred while adding profile details');
  //     });
  // }

  // addAluminiProfileDetails() {
  //   console.log(this.AluminiProfileDetail);
  //   this.aluminiServices.addAlumniProfileDetails(this.AluminiProfileDetail)
  //     .subscribe((res) => {
  //       console.log(res);
  //       alert('Profile details added Sucessfully');
  //       window.location.reload();
  //     }, err=>{
  //       alert("Email already registered")
  //       console.log(err);
  //     });
  // }

  addAluminiProfileDetails() {
    const missingValues = [];
    for (const key in this.AluminiProfileDetail) {
      if (!this.AluminiProfileDetail[key]) {
        missingValues.push(key);
      }
    }
  
    if (missingValues.length > 0) {
      const missingFields = missingValues.join(', ');
      this.toastr.error(`Please enter all data. Missing fields: ${missingFields}`);
    } else {
      console.log(this.AluminiProfileDetail);
      this.aluminiServices.addAlumniProfileDetails(this.AluminiProfileDetail)
        .subscribe((res) => {
          console.log(res);
          this.toastr.success('Profile details added Sucessfully');
          // window.location.reload();
        this.router.navigateByUrl('career')       

        }, err => {
          this.toastr.error('Email already registered');
          console.log(err);
        });
    }
  }
  

}
