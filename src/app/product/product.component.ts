import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [

  ]
  newProduct =
    {
      id:0,
      name:'',
      description:'',
      price:0
    }
    product = Array();
    onSubmit(data: any){

      this.product.push(data);
    }
    remove(pId: number) {
      // this.users ~ thuoc tinh users cua class UserComponent
      this.product = this.product.filter(function (p) {
        return p.id !== pId
      });
    }
    isEdit = false;
    onEdit(obj: any){
      this.newProduct = obj;
    //chuyển trạng thái sửa thành true
    this.isEdit = true;

    }


  }


