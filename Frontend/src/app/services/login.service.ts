import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl:String = 'http://localhost:3000/api/auth'

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(`${this.apiUrl}/`,data)
  }

  getToken():boolean{
    return !!localStorage.getItem('token')
  }
}


