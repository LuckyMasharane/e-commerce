import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private _formBuilder: FormBuilder, private prod: ProductService, private router: Router) { }


  ngOnInit(): void {
    // this.contactForm = this._formBuilder.group({
    //   id: [this.data.id],
    //   name: [this.data.name, [Validators.required]],
    //   price: [this.data.price, [Validators.required]],
    //   description: [this.data.description, [Validators.required]],
    //   picture: [this.data.picture, [Validators.required]],

    // })
  }
  // onSubmit() {
  //   this.prod.updateProduct(this.contactForm.value);

  // }

}
