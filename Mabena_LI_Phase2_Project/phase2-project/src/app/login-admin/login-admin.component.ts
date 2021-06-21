import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login-admin',

  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  user: User = new User();
  listUsers: Array<User> = [];

  constructor(private _Router: Router, private _httpService: HttpServiceService) { }

  ngOnInit(): void {
    this._httpService.getAllUsers().subscribe(result => {
      console.log(result)
      this.listUsers = result;
    }, (error) => { error })
  }

  checkForUser(): Boolean {
    let blnFound = false;

    for (var User of this.listUsers) {

      if (User.email === this.user.email && User.password === this.user.password) {

        blnFound = true;

        return true;
      }
    }
    return false;
  }

  signIn() {
    let blnFound = this.checkForUser();
    if (blnFound == true) {
      if ((this.user.email == "admin") && (this.user.password) == "admin") {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('admin', "true");
        this._Router.navigate(["/home"]);
        return;
      }
      alert('Congrats, You have been successfully logged in!');

      console.log("username is" + this.user.email + ' password is ' + this.user.password);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('user', "true");
      this._Router.navigate(["/home"]);
    }
    else {
      alert('Invalid credentials, please try again');
      this._Router.navigate(["/login"]);
    }
  }

}
