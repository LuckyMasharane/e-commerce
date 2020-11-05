import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
// import { UpdateComponent } from '../update/update.component';
// import { MatDialog } from "@angular/material/dialog";

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
    // console.log(this.product);

  }

  ngOnInit(): void {

  }

  onclick(id) {
    this.prod.deleteProduct(id)
  }

  update(id){
    this.prod.updateProduct(id);
  }
  ViewProduct(product){
    this.router.navigateByUrl('/more-info/update', { state: product});
  }
  // updateDialog(id: number) {
  //   // let dialogRef = this.dialog.open(UpdateDialogComponent);
  //   const Product = this.prod.getAllProduct().find(c => c.id === id);
  //   let dialogRef = this.dialog.open(UpdateComponent, { data: Product });
  //   //dialogRef.afterClosed().subscribe(result => {this.Company_Employees= result})
  // }

}
