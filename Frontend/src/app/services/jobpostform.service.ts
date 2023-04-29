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
}
