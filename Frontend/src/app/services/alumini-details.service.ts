import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AluminiDetailsService {

  constructor(private http:HttpClient) { }

// Add trainer head auth data
addAluminiProfileDetails(aluminiData: any) {
  return this.http.post<any>(
    'http://localhost:3000/alumni/addAluminiProfileDetails',
    aluminiData
  );
}

}
