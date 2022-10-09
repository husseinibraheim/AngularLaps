import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyProduct } from 'src/app/Interface/my-product';
import { MyProductsService } from 'src/app/services/my-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProID: number = 0
  productDetails: MyProduct | null = null
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private myProducts: MyProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.selectedProID = Number(this.activatedRoute.snapshot.paramMap.get("proid"))
    this.productDetails = this.myProducts.getProductByID(this.selectedProID)
    console.log(this.productDetails)


  }

  goBack() {
    this.location.back()
  }

}
