import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  emi:number=0
  totalPayableamount:number=0
  totalIntrestpayable:number=0
  
  emiform=new FormGroup({
    amount:new FormControl('', Validators.required),
    intrest:new FormControl('',Validators.required),
    tenure:new FormControl('',Validators.required),

  })

  get amount() {
    return this.emiform.get("amount")
  }
  get intrest() {
    return this.emiform.get("intrest")
  }
  get tenure() {
    return this.emiform.get("tenure")
  }

  calculateEmi(){
    let p=Number(this.amount?.value)
    let r=Number(this.intrest?.value)/12
    let i=r/100
    let n=Number(this.tenure?.value)*12
    let onePlusR=(1+i)**n
    this.emi=Math.round(p*i*onePlusR)/(onePlusR-1)
    this.totalPayableamount=this.emi*n
    this.totalIntrestpayable=this.totalPayableamount-p
  }

}


