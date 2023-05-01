import { Injectable,Injector } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token =localStorage.getItem('token');

  constructor(private auth:LoginService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let tokenizedRequest = req.clone(
  //     {
  //       setHeaders:{
  //         Authorization :`Bearer ${this.token}`
  //       }

  //     }
  //   )
  //     return next.handle(tokenizedRequest)
  // }

  // removeToken(){
  //   localStorage.removeItem('token')
    
    
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.auth.getToken()
    if(token){

      req = req.clone({
        setHeaders:{authorization: token}
      })
    }

    return next.handle(req)


   
  }

}
