import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-exercice',
  templateUrl: './first-exercice.component.html',
  styleUrls: ['./first-exercice.component.css']
})
export class FirstExerciceComponent implements OnInit {

  nom : " ";
  position : "left";
  taille : 10;
  police : "Arial";

  constructor() { }

  ngOnInit(): void {
  }

}
