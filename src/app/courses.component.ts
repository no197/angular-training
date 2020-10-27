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

    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    <input [(ngModel)]="password" (keyup.enter)="onKeyUp()"/>

    <button
    (click)="onSave($event)"
    class="btn btn-primary m-5"
    [style.color]="isActive ? 'red' : 'yellow'"
    [class.active]="isActive">
      Please click me
    </button>

    <br/>
    {{course.title | uppercase | lowercase }} <br/>
    {{course.numOfStudent | number}} <br/>
    {{course.rating | number: '1.1-1'}}
    {{course.price | currency: 'AUD': true}}

  `
})
export class CoursesComponent {
  title = "List of the courses";
  number = 1;
  imageUrl = "https://picsum.photos/200/300";
  colSpan = 2;
  isActive = true;
  courses;
  email: string = "me@example.com";
  password = "123456";

  course = {
    title: "Machine Learning course",
    numOfStudent: 15000,
    rating: 4.5782,
    price: 28.99,
    releaseDate: new Date(2020, 10, 10)

  }
  constructor(service: CourseService) {
    this.courses = service.getCouses()
  }

  onSave($event) {
    console.log("Clicked button!", $event);
  }

  onKeyUp() {
    console.log("email" + this.email);
    console.log("pass" + this.password);
  }

  getTitle() {
    return this.title;
  }
}
