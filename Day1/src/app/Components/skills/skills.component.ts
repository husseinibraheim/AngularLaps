import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  courses: any[] = [
    { name: "HTML", progress: "90%", style: "width: 90%" },
    { name: "CSS", progress: "80%", style: "width: 80%" },
    { name: "BOOTSTRAP", progress: "75%", style: "width: 75%" },
    { name: "JAVASCRIPT", progress: "70%", style: "width: 70%" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
