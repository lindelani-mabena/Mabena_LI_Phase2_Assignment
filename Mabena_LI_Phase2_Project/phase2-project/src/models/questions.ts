import { answer } from "./answer";
import { User } from "./user";

export class questions
{
    id:number =0;
    field: string ="";
    strQuestion: string="";
    answers: Array<answer> =[];
}