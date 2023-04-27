import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeracService {

  // apiUrl:String = `api`
  apiUrl:String = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  // signup
  employersignup(data:any){
    return this.http.post(`${this.apiUrl}/employersignup`,data)
  }
  // employer count
  employercount(){
    return this.http.get(`${this.apiUrl}/data/countemployee`)
  }

  // alumni count
  alumnicount(){
    return this.http.get(`${this.apiUrl}/data/countalumni`)
  }

}