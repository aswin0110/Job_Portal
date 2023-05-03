import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyjob',
  templateUrl: './verifyjob.component.html',
  styleUrls: ['./verifyjob.component.css']
})
export class VerifyjobComponent {

  token =localStorage.getItem('token');
  constructor(private router:Router){}

  ngOnInit(){

  }
  


}
