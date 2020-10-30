import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-word';
  courses: Course[] = [
    { id: 1, name: "Course 1" },
    { id: 2, name: "Course 2" },
    { id: 3, name: "Course 3" },
    { id: 4, name: "Course 4" }
  ]
  viewMode = "map"
}

interface Course {
  id: number,
  name: string
}
