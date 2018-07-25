import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthServiceService} from '../auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData={}
  constructor(private _auth:AuthServiceService,
              private _router:Router) { }

  ngOnInit() {
  }

  loginUser()
  {
this._auth.loginUser(this.loginUserData)
.subscribe(
  res =>  {
    console.log(res)
    localStorage.setItem('token',res.token)
    this._router.navigate(['/special'])
  },
  err=>console.log(err)

)
  }
}
