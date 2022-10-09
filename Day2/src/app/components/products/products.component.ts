import { Component, OnInit } from '@angular/core';
import { MyCategory } from 'src/app/my-category';
import { MyProduct } from 'src/app/my-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: MyProduct[];
  categoryList: MyCategory[];
  totalPrice: number = 0
  selectedCategoryID: number = 0;

  constructor() {
    this.productsList = [{
      id: 1,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 1000,
      quantity: 1,
      ImageURL: "https://media.btech.com/media/catalog/product/cache/d90305861bc3b857ca54208b208083e9/e/3/e36b3ccf25b492442be8e0ddc8ec147933eb1dba3746518ef059674778e29930.jpeg",
      categoryID: 1,
    }, {
      id: 2,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 2000,
      quantity: 20,
      ImageURL: "https://m.media-amazon.com/images/I/71320MVSdWL._AC_SX679_.jpg",
      categoryID: 2,
    }, {
      id: 3,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 3000,
      quantity: 30,
      ImageURL: "https://m.media-amazon.com/images/I/71BNkyuemiL._AC_SX679_.jpg",
      categoryID: 3,
    }
    ]

    this.categoryList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Mobiles" }
    ]

  }

  ngOnInit(): void {
  }

  buy(productPrice: number, count: string, quantity: number) {
    if (+count > 0 && quantity > 1) {
      this.totalPrice += productPrice * +count
      quantity -= +count
      console.log(quantity)
    }
    else if (quantity < +count) {
      alert("You cant buy more than the available quantity")
    }
    else {
      alert("you should buy with postive value ")
    }
  }
}
