import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Job } from '../models/job.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageacemployeeService {

  constructor(private http:HttpClient) { }

 apiUrl:String = `api`
// apiUrl:String = 'http://localhost:3000/api'

  getemployer(id:any){
    return this.http.get<any>(`${this.apiUrl}/employersignup/admin/employerdetails`+id)
  }

  updateEmployer(employer: any,id:any) {
    return this.http.put(`${this.apiUrl}/manageemployee/employee/${id}`, employer);
  }

  getVerifiedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/manageemployee/jobs`);
  }
}
