import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod_List : Observable<any[]>
  constructor(private prod: ProductService,private router:Router) { }

  ngOnInit(): void {
    // this.productLists()
  }

  // productLists(){
  //   this.prod_List = this.prod.getAllProduct();
  // }

  get productLists(){
    return this.prod.getAllProduct()
  }

  ViewProduct(product){
    this.router.navigateByUrl('/product', { state: product});
  }

}
