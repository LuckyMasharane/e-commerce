import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public contactForm: FormGroup;
  product
  constructor(private _formBuilder: FormBuilder, private prod: ProductService, private router: Router) {
    this.router.getCurrentNavigation().extras.state
    this.product = history.state
   }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      id: this.prod.getAllProduct.length + 1,
      name: "",
      price: "",
      description: "",
      picture: ""
    });
  }
  onSubmit(){
    this.prod.updateProduct(this.contactForm.value);
  }

}
