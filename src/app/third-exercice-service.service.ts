import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transaction } from './transaction'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdExerciceServiceService {

  private transactionUrl = '../assets/data'  

  constructor(private http : HttpClient) { }

  getAll() : Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.transactionUrl}/transactions.json`)
  }

  getOpById(id : string) : Observable<Transaction>{
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}.json`)
  }

}
