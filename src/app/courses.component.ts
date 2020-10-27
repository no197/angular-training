import { Component } from '@angular/core';

@Component({
  selector: "courses",
  template: "<h2>{{number+ ': ' + getTitle()}}</h2>"
})
export class CoursesComponent {
  title="List of the courses";
  number = 1;
  getTitle(){
    return this.title;
  }
}
