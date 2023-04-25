import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  // apiUrl:String = `api`
  apiUrl:String = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  // signup
  signupaccount(data:any){
    return this.http.post(`${this.apiUrl}/signup`,data)
  }
}
