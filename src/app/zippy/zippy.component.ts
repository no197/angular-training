import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
  @Input("title") title: string;
  isExpanded: boolean = false;

  onClick() {
    this.isExpanded = !this.isExpanded;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
