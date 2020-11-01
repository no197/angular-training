import { FormArray, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  })

  get topics(): FormArray {
    return this.form.get("topics") as FormArray;
  }



  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  deleteTopic(item) {
    let index = this.topics.controls.indexOf(item);
    this.topics.removeAt(index)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
