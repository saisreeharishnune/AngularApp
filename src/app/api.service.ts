import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

   url:string = "/api/products";
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get("/api/products");
  }

  getUserPosts(){
    return this.http.get("/api/posts");
  }

  getLocationData(){
    return this.http.get("/api/locationData");
  }


}
