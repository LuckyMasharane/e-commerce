import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path:"home", component:ProductComponent },
  { path:"", component:LoginComponent },
  { path:"register", component:RegisterComponent },
  { path:"add-product", component:AddProductComponent },
  { path:"product", component: InformationComponent },
  { path:"more-info/update", component: UpdateComponent },
  { path:"reset-password", component:ResetpasswordComponent },
  { path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
