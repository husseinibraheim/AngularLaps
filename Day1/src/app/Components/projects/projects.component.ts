import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  cards: any[] = [
    { name: "Navbar and Banner", imgSrc: "assets/1.png", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
    { name: "Card group", imgSrc: "assets/2.png", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
    { name: "Payment", imgSrc: "assets/3.png", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
    { name: "Contact", imgSrc: "assets/4.png", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
