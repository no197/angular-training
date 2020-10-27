import { Component } from '@angular/core';

@Component({
  selector: "courses",
  template: `
    <h2>{{number+ ': ' + getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses"> {{course}}</li>
    </ul>
  `
})
export class CoursesComponent {
  title="List of the courses";
  number = 1;
  courses = ["course1", "course2", "course3"];

  getTitle(){
    return this.title;
  }
}
