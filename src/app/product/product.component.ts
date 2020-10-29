import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prod: ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  get productList(){
    return this.prod.getAllProduct()
  }

  ViewProduct(product){
    this.router.navigateByUrl('/product', { state: product});
  }

}
