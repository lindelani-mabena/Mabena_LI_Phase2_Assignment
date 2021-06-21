import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { questions } from 'src/models/questions';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  listQuestions: Array<questions> = [];
  chosenFieldQuestions: Array<questions> = [];
  selectedField: string = "";
  selectedFieldNumber: number = 0;
  constructor(private _HttpService: HttpServiceService) { }



  ngOnInit(): void {
    this.chosenFieldQuestions = [];

    this.selectedFieldNumber = 3;

    if (this.selectedFieldNumber == 0) {


    }

    else if (this.selectedFieldNumber == 1) {

      this.selectedField = "cyber-security";

    } else if (this.selectedFieldNumber == 2) {

      this.selectedField = "software-engineering"
    }
    else if (this.selectedFieldNumber == 3) {
      this.selectedField = "cloud-computing"
    }
    else if (this.selectedFieldNumber == 4) {
      this.selectedField = "data-science"
    }

    this._HttpService.getAllQuestions().subscribe(result => {

      this.listQuestions = result;
      for (var questions of this.listQuestions) {
        for (var answer of questions.answers) {
        
        }
      }
      console.log(result);
    },
      (error) => {

      });

    for (var question of this.listQuestions) {
      if (question.field === this.selectedField) {
        this.chosenFieldQuestions.push(question)
      }
    }
  }


}
