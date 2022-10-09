import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyCategory } from 'src/app/Interface/my-category';
import { MyProduct } from 'src/app/Interface/my-product';
import { APIProductsService } from 'src/app/services/apiproducts.service';

@Component({
  selector: 'app-reactive-add-prod',
  templateUrl: './reactive-add-prod.component.html',
  styleUrls: ['./reactive-add-prod.component.css']
})
export class ReactiveAddProdComponent implements OnInit {
  categoryList: MyCategory[];
  addProduct: FormGroup;

  constructor(private route: Router, private apiService: APIProductsService) {
    this.categoryList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Mobiles" },
      { id: 4, name: "category 4" },
      { id: 5, name: "category 5" },
      { id: 6, name: "category 6" },
      { id: 7, name: "category 7" },
      { id: 8, name: "category 8" },
      { id: 9, name: "category 9" },
      { id: 10, name: "category 10" },

    ]
    this.addProduct = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      price: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      imageURL: new FormControl("", Validators.required),
      categoryID: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
  }

  addReactiveProduct() {
    let myForm: MyProduct = this.addProduct.value as MyProduct
    const observer = {
      next: (product: MyProduct) => {
        alert("added succesfully"),
          this.route.navigateByUrl("/Products")
      },
      error: (err: Error) => { alert(err.message) }
    }
    this.apiService.addProduct(myForm).subscribe(observer)
  }

  get formControl() {
    return this.addProduct.controls;
  }
}
