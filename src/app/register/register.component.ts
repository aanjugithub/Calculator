import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm = new FormGroup(
    {
      username:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    }
  )

  // getter methods
  get username(){
    return this.regForm.get("username")
  }

  get password(){
    return this.regForm.get("password")
  }

  get email(){
    return this.regForm.get("email")
  }


 signUp(){
  console.log(this.regForm.value);
  
 }
}
