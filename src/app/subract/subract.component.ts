import { Component } from '@angular/core';

@Component({
  selector: 'app-subract',
  templateUrl: './subract.component.html',
  styleUrls: ['./subract.component.css']
})
export class SubractComponent {

  result:number=0
  performSubraction(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this.result=num1-num2
  }
    

}
