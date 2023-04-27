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
    this.aluminiServices.addAluminiProfileDetails(this.AluminiProfileDetail)
      .subscribe((res) => {
        alert('Profile details added Sucessfully');
        window.location.reload();
      });
  }
}
