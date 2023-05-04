import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AluminiDetailsService } from 'src/app/services/alumini-details.service';

@Component({
  selector: 'app-alumni-manage-account',
  templateUrl: './alumni-manage-account.component.html',
  styleUrls: ['./alumni-manage-account.component.css']
})
export class AlumniManageAccountComponent {
  // AlumniProfileDetails= {
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   phone:'',
  //   highestQualification:'',
  //   course:'',
  //   batch:'',
  //   placementStatus:'',
  //   companyName:'',
  // };

  id: any;
  alumniData: any;
  
  constructor(private alumniServices:AluminiDetailsService, private router: Router){}

  ngOnInit(): void{

   
     // get alumini services Officer Auth Details
    //  let alumniId = localStorage.getItem('editAlumniId');
    // this.alumniServices.getAlumniProfileDetails(alumniId).subscribe((data) => {
    //   this.AlumniProfileDetails = JSON.parse(JSON.stringify(data));
    // });
    this.id = localStorage.getItem('user');
    this.getAlumniProfile();
    

    
  }

  getAlumniProfile() {
    this.alumniServices.getAlumniProfile(this.id).subscribe(data => {
      this.alumniData = data;
    }, error => {
      console.log(error);
    });
  }

  // Update the profile
  // updateAlumniDetails() {
  //   this.alumniServices.updateAlumniDetails(this.AlumniProfileDetails);
  //   alert('profile updated successfully');
  //   window.location.reload();
  // }

  

}
