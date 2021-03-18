import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ThirdExerciceServiceService } from '../third-exercice-service.service'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-third-exercice-board',
  templateUrl: './third-exercice-board.component.html',
  styleUrls: ['./third-exercice-board.component.css']
})
export class ThirdExerciceBoardComponent implements OnInit {

  transactions : Transaction[];
  dtTrigger: Subject<any> = new Subject();

  constructor(private service : ThirdExerciceServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(
      t => {this.transactions = t;
            this.dtTrigger.next()
      })
  }

  selectOp(id : number){
    this.router.navigate(["operation", id])
  }

}
