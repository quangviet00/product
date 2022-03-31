import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts: any;
  constructor() { }
ngOnInit(): void {
  this.onGetList();
  }
  onGetList() {

  }

   onDelete(id: number) {
    console.log(id);
  }
    }







