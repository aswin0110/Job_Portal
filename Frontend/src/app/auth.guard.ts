import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isToken!:boolean
  constructor(private router:Router, private auth:LoginService ){ }
  
  canActivate()
  {
   
    if(this.auth.getToken()){
      return true
   }
   else{
    this.router.navigate([''])
    return false
   }
  }
}
