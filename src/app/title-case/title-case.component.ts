import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.scss']
})
export class TitleCaseComponent implements OnInit {
  title = "";

  constructor() { }

  ngOnInit(): void {
  }

}
