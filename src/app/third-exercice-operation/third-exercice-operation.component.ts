import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ThirdExerciceServiceService } from '../third-exercice-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-third-exercice-operation',
  templateUrl: './third-exercice-operation.component.html',
  styleUrls: ['./third-exercice-operation.component.css']
})
export class ThirdExerciceOperationComponent implements OnInit {

  transaction : Transaction;

  constructor(private service : ThirdExerciceServiceService, 
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private location : Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      this.getOpById(p.get("id"))
    })
  }

  
  getOpById(id : string): void {
    this.service.getOpById(id)
    .subscribe(t => this.transaction = t);
  }

  retour(){
    this.location.back();
  }

}
