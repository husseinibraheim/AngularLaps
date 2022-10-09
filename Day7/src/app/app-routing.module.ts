import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ReactiveAddProdComponent } from './components/reactive-add-prod/reactive-add-prod.component';
import { AuthGuGuard } from './auth-gu.guard';

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "Products", component: ProductsComponent, canActivate:[AuthGuGuard] },
  { path: "Products/add", component: AddProductsComponent },
  { path: "Products/readd", component: ReactiveAddProdComponent },
  { path: "Products/:proid", component: ProductDetailsComponent },
  { path: "Order", component: ProductOrderComponent },
  { path: "Login", component: HomeComponent },
  { path: "Logout", component: HomeComponent },
  { path: "User", loadChildren: () => import('src/app/usermod/usermod.module').then(use => use.UsermodModule) },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
