import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  constructor(private _HttpService: HttpServiceService, private _Router: Router) {

  }
  ngOnInit(): void {

  }

  signUp() {
    this._HttpService.signUp(this.user).subscribe(result => {
      alert("New User Added Successfully")
      this._Router.navigate(["/login"])
    },

      (error) => { console.log("error is" + error) });
  }


}
