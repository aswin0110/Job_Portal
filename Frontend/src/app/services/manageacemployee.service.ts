import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageacemployeeService {

  constructor(private http:HttpClient) { }
  // updatabook(id:any , data:any){
  //   return this.http.put(`${this.api}/book/${data}` ,id)
  // }

  // getCurrentdata(id:any){
  //   return this.http.get(`${this.api}/book/${id}`)
  // }
}
