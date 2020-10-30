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

  addCourse() {
    if (!this.courses.length) {
      this.courses.push({ id: 1, name: "Course 1" });
      return;
    }
    let maxId = Math.max(...this.courses.map(item => item.id));
    let newId = maxId + 1;
    this.courses.push({ id: newId, name: `Course ${newId}` })
  }

  onDelete(id) {
    this.courses = this.courses.filter(item => item.id != id);
  }
}

interface Course {
  id: number,
  name: string
}
