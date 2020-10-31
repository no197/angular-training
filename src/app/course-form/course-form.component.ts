import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  categories = [{ id: 1, name: "Art" }, { id: 2, name: "Development" }, { id: 3, name: "Language" }]
  constructor() { }

  ngOnInit(): void {
  }

}
