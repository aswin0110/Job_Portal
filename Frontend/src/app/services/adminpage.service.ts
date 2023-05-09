import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminpageService {

  constructor(private http:HttpClient) { }

apiUrl:String = `api` 
// apiUrl:String = 'http://localhost:3000/api'

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
  return this.http.post(`${this.apiUrl}/apiadmin`, {email: id})

}

// get all alumni applied job post details to admin verify
getAllData(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/apijobapply/apijobapply`);
}

updatejobapply(item:any){
  return this.http.put(`${this.apiUrl}/deletejobapplies/deletejobapplies` ,item )
}
verifyjobapply(item:any){
  return this.http.put(`${this.apiUrl}/verifyjobapplies/verifyjobapplies` ,item )
}

getadminnames(item:any){
  return this.http.post(`${this.apiUrl}/getnameadmin/adminname`, item)
}



}
