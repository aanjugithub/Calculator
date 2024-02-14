import { Component } from '@angular/core'; 
import {FormGroup,FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-emicalc',
  templateUrl: './emicalc.component.html',
  styleUrls: ['./emicalc.component.css']
})
export class EmicalcComponent {

emiForm= new FormGroup(
  {
  amount:new FormControl("",Validators.required),
  rate:new FormControl("",Validators.required),
  tenure:new FormControl("",Validators.required)

  
})

get amount(){
  return this.emiForm.get("amount")
}

get rate(){
  return this.emiForm.get("rate")
}

get tenure(){
  return this.emiForm.get("tenure")
}

}
