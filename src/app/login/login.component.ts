import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      
  })

  get username(){
    return this.loginForm.get("username")
  }

  get password(){
    return this.loginForm.get("password")
  }

signIn(){
  console.log(this.loginForm.value);
  
}
}
