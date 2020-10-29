import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private prod: ProductService) { }

  ngOnInit(): void {
  }

  onclick(){
    this.prod.deleteProduct
  }

}
