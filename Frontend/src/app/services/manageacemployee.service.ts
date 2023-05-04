import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Job } from '../models/job.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageacemployeeService {

  constructor(private http:HttpClient) { }
 
  getemployer(id:any){
    return this.http.get<any>('http://localhost:3000/api/employersignup/admin/employerdetails'+id)
  }

  updateEmployer(employer: any,id:any) {
    return this.http.put(`http://localhost:3000/api/manageemployee/employee/${id}`, employer);
  }

  getVerifiedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:3000/api/manageemployee/jobs');
  }
}
