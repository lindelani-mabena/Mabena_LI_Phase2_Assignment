import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { answer } from 'src/models/answer';
import { questions } from 'src/models/questions';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css'],
})
export class AddNewQuestionComponent implements OnInit {

  strAnswer1: string = "";
  strAnswer2: string = "";
  strAnswer3: string = "";
  strAnswer4: string = "";
  strAnswer5: string = "";
  field: string = "";
  strQuestion: string = "";
  Answer1: answer = new answer();
  Answer2: answer = new answer();
  Answer3: answer = new answer();
  Answer4: answer = new answer();
  Answer5: answer = new answer();

  strCorrectAnswerChosen: string = "";
  listAnswers: Array<answer> = [];

  questionObj: questions = new questions();
  constructor(private _HttpService: HttpServiceService,private _Router:Router) {

  }

  ngOnInit(): void {
  }

  AddNewQuestion() {
    this.questionObj.answers =[];
    this.listAnswers= [];

    this.Answer1.id = 1;
    this.Answer2.id = 2;
    this.Answer3.id = 3;
    this.Answer4.id = 4;
    this.Answer5.id = 5;

    this.Answer1.strAnswer = this.strAnswer1;
    this.Answer2.strAnswer = this.strAnswer2;
    this.Answer3.strAnswer = this.strAnswer3;
    this.Answer4.strAnswer = this.strAnswer4;
    this.Answer5.strAnswer = this.strAnswer5;

    if (this.strCorrectAnswerChosen == "strAnswer1") {
      this.Answer1.blnCorrect = true;
      this.Answer2.blnCorrect = false;
      this.Answer3.blnCorrect = false;
      this.Answer4.blnCorrect = false;
      this.Answer5.blnCorrect = false;

    }
    else if (this.strCorrectAnswerChosen == "strAnswer2") {
      this.Answer2.blnCorrect = true;
      this.Answer1.blnCorrect = false;
      this.Answer3.blnCorrect = false;
      this.Answer4.blnCorrect = false;
      this.Answer5.blnCorrect = false;
    }
    else if (this.strCorrectAnswerChosen == "strAnswer3") {

      this.Answer1.blnCorrect = false;
      this.Answer2.blnCorrect = false;
      this.Answer3.blnCorrect = true;
      this.Answer4.blnCorrect = false;
      this.Answer5.blnCorrect = false;

    }
    else if (this.strCorrectAnswerChosen == "strAnswer4") {
      this.Answer1.blnCorrect = false;
      this.Answer2.blnCorrect = false;
      this.Answer3.blnCorrect = false;
      this.Answer4.blnCorrect = true;
      this.Answer5.blnCorrect = false;
    }
    else if (this.strCorrectAnswerChosen == "strAnswer5") {
      this.Answer5.blnCorrect = true;
      this.Answer1.blnCorrect = false;
      this.Answer2.blnCorrect = false;
      this.Answer3.blnCorrect = false;
      this.Answer4.blnCorrect = false;

    }


    this.listAnswers.push(this.Answer1);
    this.listAnswers.push(this.Answer2);
    this.listAnswers.push(this.Answer3);
    this.listAnswers.push(this.Answer4);
    this.listAnswers.push(this.Answer5);

    this.questionObj.answers = this.listAnswers;
    console.log("string field " + this.questionObj.field + this.questionObj.strQuestion);
    this._HttpService.addNewQuestion(this.questionObj).subscribe(result => {
      alert("The new Question was added.")
      this._Router.navigate(['home']);
    }, (error) => {
      ("error is " + error)
    })
  }

  handleChange(event: Event) {
    //alert((event.target as HTMLInputElement).value);
    this.strCorrectAnswerChosen = (event.target as HTMLInputElement).value;
    return (event.target as HTMLInputElement).value;
  }
} 