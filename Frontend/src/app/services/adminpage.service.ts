import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminpageService {

  constructor(private http:HttpClient) { }

// apiUrl:String = `api`
apiUrl:String = 'http://localhost:3000/api'

employercount(){
  return this.http.get(`${this.apiUrl}/count/data/countemployee` )
}

alumnicount(){
  return this.http.get(`${this.apiUrl}/countalumni/data/countalumni` )

}

getemployerac(){

  return this.http.get(`${this.apiUrl}/signup/admin/signupdetails`)

}

getaluprofile(data:any){
  return this.http.post(`${this.apiUrl}/alumni/alumniprof`, data)
}

getadminname(id:any){
  return this.http.post(`http://localhost:3000/apiadmin`, {email: id})

}


  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/apijobapply`);
  }




}
