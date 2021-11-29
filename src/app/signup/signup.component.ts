import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { APIService } from '../api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private fb:FormBuilder,private api:APIService) { 
    
  }
  signUpForm = this.fb.group({
    firstName: [''],
    lastName:[''],
    email:[''],
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
      firstName: [''],
      lastName:[''],
      email:[''],
      password:[''],
      address:this.fb.group({
        address1:[''],
        address2:[''],
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
  
  save(){

    console.log(this.signUpForm.value);
  }
  onCountryChange(){
    this.states = this.countries.filter((x:any)=>x.countryName==this.signUpForm.value.address.country)[0]["states"];
    console.log(this.states);
  }

  onStateChange(){
    this.districts = this.states.filter((x:any)=>x.stateName==this.signUpForm.value.address.state)[0]["districts"];
   
  }

}
