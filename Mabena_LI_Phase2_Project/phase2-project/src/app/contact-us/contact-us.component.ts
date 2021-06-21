import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ɵangular_packages_router_router_b } from '@angular/router';
import { contact } from 'src/models/contact';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  ContactObj: contact = new contact();
  constructor(private _httpService: HttpServiceService, private _Router: Router) { }

  ngOnInit(): void {
  }

  contactUs() {
    this._httpService.ContactUs(this.ContactObj).subscribe(result => {
      console.log("result: " + result);
      alert("Thank you for contacting us, we will get back to you soon");
      this._Router.navigate(['home']);

    }, (error) => {
      console.log("error" + error)
    });
  }

}
