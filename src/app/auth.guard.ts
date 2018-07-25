import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auhtService:AuthServiceService,
private _router:Router){}

canActivate():boolean{
  if(this._auhtService.loggedIn())
  {
    return true
  } else {
    this._router.navigate(['/login'])
    return false
  }
}

}
