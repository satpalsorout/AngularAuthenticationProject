import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserData={}
  constructor(private _auth: AuthServiceService,
  private _router:Router) { }

  ngOnInit() {
  }

  registerUser(){
   this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/special'])
    },
     err => console.log(err)
   )
  }
}
