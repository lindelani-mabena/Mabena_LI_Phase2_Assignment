import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthenticationGuardService } from '../authentication-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedIn: boolean = false;
  adminLogin: boolean = false;
  constructor(private _Authenticationguard: AuthenticationGuardService) { }

  ngOnInit(): void {

    if (this._Authenticationguard.isLoggedIn()) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }


  }

  btnLoginLink() {

  }

  btnSignUpLink() {

  }

  getAdmin() {
    if (localStorage.getItem('admin') === "true") {
      this.adminLogin = true;
    }
    else {
      this.adminLogin = false;
    }
  }

  btnLogoutLink() {
    this.loggedIn = false;
    this._Authenticationguard.logout();
  }

}
