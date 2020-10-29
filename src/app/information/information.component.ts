import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  product

  constructor(private prod: ProductService, private router: Router) {
    this.router.getCurrentNavigation().extras.state
    this.product = history.state
    console.log(this.product);

  }

  ngOnInit(): void {

  }

  onclick() {
    this.prod.deleteProduct
  }

}
