import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstExerciceComponent } from './first-exercice/first-exercice.component'
import { SecondExerciceComponent } from './second-exercice/second-exercice.component'
import { ThirdExerciceBoardComponent } from './third-exercice-board/third-exercice-board.component';
import { ThirdExerciceOperationComponent } from './third-exercice-operation/third-exercice-operation.component';

const routes: Routes = [
  {path: '', redirectTo: '/first', pathMatch: 'full'},
  { path: 'first', component: FirstExerciceComponent },
  { path: 'second', component: SecondExerciceComponent },
  { path: 'third', component: ThirdExerciceBoardComponent },
  { path: 'operation/:id', component: ThirdExerciceOperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
