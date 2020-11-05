import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod_List: Observable<any[]>
  constructor(private prod: ProductService, private router: Router) { }

  ngOnInit(): void {
    // this.productLists()
  }

  slides = [
    { pic:"https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80"},
    { pic:"https://images.unsplash.com/photo-1598775378121-e24f7062c151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
    { pic:"https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" }
  ]
  // productLists(){
  //   this.prod_List = this.prod.getAllProduct();
  // }

  get productLists() {
    return this.prod.getAllProduct()
  }

  ViewProduct(product) {
    this.router.navigateByUrl('/product', { state: product });
  }

}
