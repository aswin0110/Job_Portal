import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluminiDetailsService {
// apiUrl:String = `api`
apiUrl:String = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

// Add alimini profile details
addAlumniProfileDetails(alumniData: any) {
  return this.http.post<any>(
    `${this.apiUrl}/addAlumniProfileDetails/addAlumniProfileDetails`,
    alumniData
  );
}

// get alumini details to update by ID 
getAlumniProfileDetails(id:any) {
  return this.http.get(`${this.apiUrl}/alumniDetails/alumniDetails/` + id);
}
// update Alumini Details
updateAlumniDetails(alumni: any) {
  console.log('update profile Details');
  return this.http
    .put(`${this.apiUrl}/alumniProfileUpdate/alumniProfileUpdate`, alumni)
    .subscribe((data) => {
      console.log(data);
    });
}

// to get alumni datas in a form to update
getAlumniProfile(id: string) {
  return this.http.get<any>(`${this.apiUrl}alumnidb/alumniprofile/alumniprofile`, { params: { id } });
}

}
