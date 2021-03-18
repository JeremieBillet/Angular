import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-exercice-header',
  templateUrl: './third-exercice-header.component.html',
  styleUrls: ['./third-exercice-header.component.css']
})
export class ThirdExerciceHeaderComponent implements OnInit {

  today = Date.now().toString();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now().toString();
    }, 1000);
  }

}
