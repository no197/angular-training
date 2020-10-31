import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  contactMethod = [{ id: 1, name: "Mail" }, { id: 2, name: "Phone" }]
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(f) {
    console.log(f);

  }
  log(x) {
    console.log(x);
  }
}
