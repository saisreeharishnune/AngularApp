import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.fb.group({
    userName:[''],
    password:['']
  });
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    
    this.router.navigateByUrl('/welcome');
  }

}
