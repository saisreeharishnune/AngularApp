import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { APIService } from '../api.service';

function emptyCheckValidator(c:AbstractControl){
  if(c.value.length == ''){
    return {emptyCheckValidator:true}
  }
  return null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private fb:FormBuilder,private api:APIService) { 
    
  }

  get form(){
    return this.signUpForm.controls;
  }
 

  signUpForm = this.fb.group({
    firstName: ['',[emptyCheckValidator]],
    lastName:['',[emptyCheckValidator]],
    emailGroup:this.fb.group(
      {email:['',[Validators.required,Validators.email]],
      confirmEmail:['',[Validators.required,Validators.email]]}),
    password:[''],
    address:this.fb.group({
      address1:[''],
      address2:[''],
      state:[],
      country:[],
      district:[],
      zipcode:['']
    })
  });

  locationData:any={};
  countries=[];
  states=[];
  districts=[];
  ngOnInit(): void {
   
   
   
   this.api.getLocationData().subscribe((x:any)=>{
    
    this.countries=x.countries;
    this.signUpForm = this.fb.group({
      firstName: ['',[emptyCheckValidator]],
      lastName:['',[emptyCheckValidator]],
      emailGroup:this.fb.group(
      {email:['',[Validators.required,Validators.email]],
      confirmEmail:['',[Validators.required,Validators.email]]}),
      password:[''],
      address:this.fb.group({
        address1:['',[emptyCheckValidator]],
        address2:['',[emptyCheckValidator]],
        state:[],
        country:[this.countries],
        district:[''],
        zipcode:['']
      })
    });
  });
    this.onChanges();
  }
 

  onChanges(){
    this.signUpForm.valueChanges.subscribe(x=>console.log(x));
  }

   
  emaildGroupControls = this.signUpForm.controls['emailGroup'];
  get emailGroupForm(){
    return this.emaildGroupControls;
  }
  
  save(){
    console.log(this.emailGroupForm);
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.controls);
  }
  onCountryChange(){
    this.states = this.countries.filter((x:any)=>x.countryName==this.signUpForm.value.address.country)[0]["states"];
    console.log(this.states);
  }

  onStateChange(){
    this.districts = this.states.filter((x:any)=>x.stateName==this.signUpForm.value.address.state)[0]["districts"];
   
  }

}
