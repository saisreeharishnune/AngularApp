import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


function minLengthValidator(c:AbstractControl){
  if(c.value !="" && c.value.length <3){
    return {minLengthValidator:true}
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.fb.group({
    userName:['',[Validators.required,minLengthValidator]],
    password:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);
   //if(this.checkValidity()){
      this.router.navigateByUrl('/welcome');
    //}
   
  }



  
  get form(): { [key: string]: AbstractControl; }{
    return this.loginForm.controls;
}

}
