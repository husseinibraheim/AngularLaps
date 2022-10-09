import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navTaps = ["Home", "Products", "Order"]
  dircs = ["Home", "Products", "Order"]

  ngOnInit(): void {
  }

}
