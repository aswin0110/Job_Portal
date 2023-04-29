import { Component } from '@angular/core';
import { AluminiDetailsService } from 'src/app/services/alumini-details.service';

@Component({
  selector: 'app-student-profile-create',
  templateUrl: './student-profile-create.component.html',
  styleUrls: ['./student-profile-create.component.css']
})
export class StudentProfileCreateComponent {

  constructor(private aluminiServices:AluminiDetailsService){}

  AluminiProfileDetail= {
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


  addAluminiProfileDetails() {
    console.log(this.AluminiProfileDetail);
    this.aluminiServices.addAlumniProfileDetails(this.AluminiProfileDetail)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status === '1') {
          alert('Profile details added successfully');
          window.location.reload();
        } else if (res.status === '2') {
          alert('Email or password cannot be blank');
        } else if (res.status === 'data alredy exist' || res.status === 'data already exists') {
          alert('Email already registered');
        } else {
          alert('Unknown error occurred');
        }
      }, err => {
        console.error(err);
        alert('Error occurred while adding profile details');
      });
  }


}
