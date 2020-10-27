import { CourseService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: "courses",
  template: `
    <h2>{{number+ ': ' + getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses"> {{course}}</li>
    </ul>
    <img src={{imageUrl}}/>
    <img [src]="imageUrl" />

    <table>
    <tr>
    <td [attr.colspan]="colSpan">123</td>
    </tr>
    </table>

    <input #email (keyup.enter)="onKeyUp(email.value)"/>

    <button
    (click)="onSave($event)"
    class="btn btn-primary m-5"
    [style.color]="isActive ? 'red' : 'yellow'"
    [class.active]="isActive">
      Please click me
    </button>

  `
})
export class CoursesComponent {
  title = "List of the courses";
  number = 1;
  imageUrl = "https://picsum.photos/200/300";
  colSpan = 2;
  isActive = true;
  courses;
  constructor(service: CourseService) {
    this.courses = service.getCouses()
  }

  onSave($event) {
    console.log("Clicked button!", $event);
  }

  onKeyUp(email) {
    console.log(email)
  }

  getTitle() {
    return this.title;
  }
}
