import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prod: ProductService) { }

  ngOnInit(): void {
  }

  get productList(){
    return this.prod.getAllProduct()
  }

}
