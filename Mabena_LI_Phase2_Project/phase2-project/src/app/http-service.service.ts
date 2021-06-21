import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contact } from 'src/models/contact';
import { questions } from 'src/models/questions';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _HttpService: HttpClient) {
  }

  signUp(user: User): Observable<User> {
    return this._HttpService.post<User>("http://localhost:3000/users/", user);
  }



  getAllUsers(): Observable<User[]> {
    return this._HttpService.get<User[]>("http://localhost:3000/users/");
  }

  ContactUs(contactUsObj: contact): Observable<contact> {
    return this._HttpService.post<contact>("http://localhost:3000/contacts/", contactUsObj);
  }

  getAllQuestions(): Observable<questions[]> {
    return this._HttpService.get<questions[]>("http://localhost:3000/questions");
  }

  addNewQuestion(questionObject: questions): Observable<questions> {
    return this._HttpService.post<questions>("http://localhost:3000/questions", questionObject);
  }


}
