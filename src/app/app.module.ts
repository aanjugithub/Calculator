import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { SubractComponent } from './subract/subract.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivisionComponent } from './division/division.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { TempcalcComponent } from './tempcalc/tempcalc.component';
import { MeterconverterComponent } from './meterconverter/meterconverter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmicalcComponent } from './emicalc/emicalc.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    SubractComponent,
    MultiplyComponent,
    DivisionComponent,
    BmiComponent,
    TempcalcComponent,
    MeterconverterComponent,
    RegisterComponent,
    LoginComponent,
    EmicalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
