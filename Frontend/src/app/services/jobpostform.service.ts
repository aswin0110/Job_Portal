import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobpostformService {

  constructor(private http:HttpClient) { }

  // addjob(data:any){
  //   return this.http.post(`${this.api}/book` , data)
  // }

  // Job get data to career page
  getJobDetails() {
    return this.http.get<any>('http://localhost:3000/career/jobDetails');
  }

  // Job get single data job application page
  getSingleJobDetails(id: any) {
    return this.http.get('http://localhost:3000/career/jobDetails/' + id);
  }

  // Apply for particular job 
  applyJob(jobAppliedData: any) {
    return this.http.post<any>(
      'http://localhost:3000/career/appliedJob',
      jobAppliedData
    );
  }


// employer job post form
  addjobpost(data:any){
    return this.http.post<any>('http://localhost:3000/api/jobpost/',data)
  }

  // count for course
  coursecount(){
    return this.http.get('http://localhost:3000/api/countcourse/data/countcourse' )
  
  }

  coursename(){
    return this.http.get('http://localhost:3000/api/countcourse/data/coursename' )
  
  }
}




