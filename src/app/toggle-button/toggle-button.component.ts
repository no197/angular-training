import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() isSuccess: boolean;

  onClick() {
    this.isSuccess = !this.isSuccess;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
