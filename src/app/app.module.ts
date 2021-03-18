import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstExerciceComponent } from './first-exercice/first-exercice.component';
import { SecondExerciceComponent } from './second-exercice/second-exercice.component';
import { ThirdExerciceBoardComponent } from './third-exercice-board/third-exercice-board.component';
import { ThirdExerciceOperationComponent } from './third-exercice-operation/third-exercice-operation.component';
import { ThirdExerciceHeaderComponent } from './third-exercice-header/third-exercice-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstExerciceComponent,
    SecondExerciceComponent,
    ThirdExerciceBoardComponent,
    ThirdExerciceOperationComponent,
    ThirdExerciceHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
