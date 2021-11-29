import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:APIService) { }
  userPosts:any[] = [];
  userName:string='';
  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getUserPosts().subscribe((x:any)=>{ this.getUserPosts(x,id);});
    this.userName = this.route.snapshot.paramMap.get('userDetails') || '';
  }

  getUserPosts(posts: any[],id:number){
    
    this.userPosts = posts.filter(x=>x.userId == id);
    console.log(posts,id,this.userPosts);
  }


}
