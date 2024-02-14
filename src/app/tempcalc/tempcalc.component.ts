import { Component } from '@angular/core';

@Component({
  selector: 'app-tempcalc',
  templateUrl: './tempcalc.component.html',
  styleUrls: ['./tempcalc.component.css']
})
export class TempcalcComponent {
 tempDC:number=0
 tempFH:number=0
 
    convertTempdtof(){
      
      this.tempFH=this.tempDC*(9/5)+32

    }

    convertTempftod(){
      
      this.tempDC=(this.tempFH-32)*(5/9)

    }

}
