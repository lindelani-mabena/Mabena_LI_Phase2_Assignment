import { Component, OnInit, QueryList } from '@angular/core';
import { answer } from 'src/models/answer';
import { questions } from 'src/models/questions';
import { User } from 'src/models/user';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-answering',
  templateUrl: './answering.component.html',
  styleUrls: ['./answering.component.css']
})

export class AnsweringComponent implements OnInit {

  listQuestions: Array<questions> = [];
  chosenFieldQuestions: Array<questions> = [];
  ChosenField: string = "";
  selectedFieldNumber: number = 0;
  score: number = 0;
  radiosel: any;
  radioSelectedString: string = "";
  radioSelected: string = "";
  selectedAnswersList: Array<string> = [];
  ChoseField:boolean =true;
  totalNumberofQuestions: number= 0;

  constructor(private _HttpService: HttpServiceService) {
    this.selectedAnswersList.push("");
  }
  ngOnInit(): void {
    // this.chosenFieldQuestions =[];

    /* this.selectedFieldNumber= 3;
 
     if (this.selectedFieldNumber == 0) {
 
       
     }
 
    else if (this.selectedFieldNumber == 1) {
 
       this.selectedField="cyber-security";
 
     } else if (this.selectedFieldNumber == 2) {
 
       this.selectedField="software-engineering"
     }
     else if (this.selectedFieldNumber == 3) {
       this.selectedField="cloud-computing"
     }
     else if (this.selectedFieldNumber == 4) {
       this.selectedField="data-science"
     } */

    
  }

  calculate():number {
    let indexCounter =0;


    this.totalNumberofQuestions = this.chosenFieldQuestions.length;
    for(var question of this.chosenFieldQuestions)
    {
      indexCounter++;
      
  
      for(var stringAnswer of question.answers)
      {
        
        if(stringAnswer.blnCorrect == true)
        {
        
          if(stringAnswer.strAnswer == this.selectedAnswersList[indexCounter])
          {
            this.score +=1;
          }
        }
      }
    }

    alert("total score is "+ this.score);
    
    return this.score;
  }

  startTest()
  {
    this.ChoseField = false;

    this._HttpService.getAllQuestions().subscribe(result => {

      this.listQuestions = result;

      for (var question of this.listQuestions) {
        if (question.field === this.ChosenField) {
          this.chosenFieldQuestions.push(question)
        }
      }
      
      console.log(result);
    },
      (error) => {
      });
  }
  handleChange(evt: Event) {

    //alert('You clicked' + (evt.target as HTMLInputElement).value);
    let tempId: number = +((evt.target as HTMLInputElement).name)
    if (this.selectedAnswersList[tempId] != "") {
      delete this.selectedAnswersList[tempId];
    this.selectedAnswersList.splice(tempId, 1, (evt.target as HTMLInputElement).value);
      //alert(this.selectedAnswersList);
      return (evt.target as HTMLInputElement).value;
    }
    this.selectedAnswersList.push((evt.target as HTMLInputElement).value);
   // alert(this.selectedAnswersList);
    return (evt.target as HTMLInputElement).value;


  }

}








