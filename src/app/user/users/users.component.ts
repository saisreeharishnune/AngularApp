import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api: APIService) { }

  users:any = [];
  displayData:any = {};
  ngOnInit(): void {
    
    this.api.getPosts().subscribe((x:any) =>this.users = x);
    
  }

  getUsers(){
    
   
  }
  showData(userData:any){
    this.displayData = userData.address;
    this.displayData.name = userData.name;
    this.displayData.id = userData.id;
    
  }

}
