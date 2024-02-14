import { Component } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {
  result:number=1

  performMultiplication(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this.result=num1*num2

  }
 
}
