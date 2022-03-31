import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 const apiUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }
  getPost(){
    return this.http.get(apiUrl);
  }
  getPostById(id: undefined | string){
    return this.http.get(`${apiUrl}/${id}`);
  }
  deletePost(id: number | string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
  createPost(obj: {title:string, content: string}){
    return this.http.post(apiUrl, obj);
  }
  updatePost(id: number|string, obj: {title:string, content: string}){
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
