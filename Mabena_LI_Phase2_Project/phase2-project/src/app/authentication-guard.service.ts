import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  constructor(private _Router:Router) { 

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  
      if(this.isLoggedIn())
      {
        return true;
      }
        this._Router.navigate(['/login']);
        return false;
       
      
  }

   isLoggedIn(): boolean
   {
     let LoggedInStatus = false;

     if(localStorage.getItem('isLoggedIn')==="true")
     {
      LoggedInStatus = true;
     }
     else
     {
       LoggedInStatus = false;
     }
     return LoggedInStatus;
   }


   logout()
   {
    localStorage.removeItem("admin");
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'false')
   }
}
