import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
}
