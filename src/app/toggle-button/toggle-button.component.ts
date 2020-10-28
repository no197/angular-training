import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input("is-favourite") isSuccess: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isSuccess = !this.isSuccess;
    this.change.emit({ newValue: this.isSuccess });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
