import { Component, OnInit } from '@angular/core';
import {Operation} from './Operation';

@Component({
  selector: 'app-second-exercice',
  templateUrl: './second-exercice.component.html',
  styleUrls: ['./second-exercice.component.css']
})
export class SecondExerciceComponent implements OnInit {

  firstNumber = 0;
  secondNumber = 0;
  operateur = "+"
  total = 0;
  historique : Operation[] = new Array();  

  constructor() { }

  ngOnInit(): void {
  }

  calculer() {
    switch (this.operateur) {
      case "+":
        this.total = this.firstNumber + this.secondNumber
        break;

      case "-":
        this.total = this.firstNumber - this.secondNumber
        break;

      case "/":
        this.total = this.firstNumber / this.secondNumber
        break;

      case "*":
        this.total = this.firstNumber * this.secondNumber
        break;

      default:
        break;
    }
    
    this.historique.unshift({
      date : new Date().toString(), 
      resultat : this.firstNumber.toString()+" "+this.operateur+" "+this.secondNumber.toString()+" = "+this.total.toString()
    });
  }

  delete(date: string){
    this.historique = this.historique.filter(e => e.date != date);
  }


}
