import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navTaps = ["About", "Skills", "Projects", "Services", "Testimonials", "Contact",]
  constructor() { }

  ngOnInit(): void {
  }

}
