import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private prod: ProductService) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      id: Math.floor(Math.random() * 50),
      name: "",
      price: "",
      description: "",
      picture: ""
    });
  }

  onSubmit() {
    this.prod.addProduct(this.contactForm.value);
  }

}
