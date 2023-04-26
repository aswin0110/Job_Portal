import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl:String = 'http://localhost:3000/user'

  constructor(private http:HttpClient) { }

  login(code:any){
    return this.http.get(`${this.apiUrl}/login`,code)
  }
}
