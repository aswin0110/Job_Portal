import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluminiDetailsService {

  constructor(private http:HttpClient) { }

// Add alimini profile details
addAlumniProfileDetails(alumniData: any) {
  return this.http.post<any>(
    'http://localhost:3000/alumni/addAlumniProfileDetails',
    alumniData
  );
}

// get alumini details to update by ID 
getAlumniProfileDetails(id:any) {
  return this.http.get('http://localhost:3000/alumni/alumniDetails/' + id);
}
// update Alumini Details
updateAlumniDetails(alumni: any) {
  console.log('update profile Details');
  return this.http
    .put('http://localhost:3000/alumni/alumniProfileUpdate/', alumni)
    .subscribe((data) => {
      console.log(data);
    });
}

// to get alumni datas in a form to update
getAlumniProfile(id: string) {
  return this.http.get<any>(`localhost:3000/api/alumnidb/alumniprofile`, { params: { id } });
}

}
