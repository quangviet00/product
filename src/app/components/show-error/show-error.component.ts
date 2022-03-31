import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  //Input có thể truyền vào biến nhận được từ cha
  // nếu không truyền thì biến của input khai báo chình là
  //nếu truyền thì có thể
  // @Input() message: string;
// @Input('message') mes: string;
@Input() formField: any;
@Input() key:string;


  constructor() {
    this.key="";
  }

  ngOnInit(): void {
  }

}
