import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { BmiComponent } from './bmi/bmi.component';
import { BankComponent } from './bank/bank.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"division",component:DivisionComponent},
  {path:"bmi",component:BmiComponent},
  {path:"emi",component:BankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
