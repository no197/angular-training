import { CourseService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: "courses",
  template: `
    <h2>{{number+ ': ' + getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses"> {{course}}</li>
    <img src={{imageUrl}}/>
    <img [src]="imageUrl" />
    </ul>
  `
})
export class CoursesComponent {
  title="List of the courses";
  number = 1;
  imageUrl = "https://picsum.photos/200/300";
  courses;
  constructor(service: CourseService){
    this.courses = service.getCouses()
  }

  getTitle(){
    return this.title;
  }
}
