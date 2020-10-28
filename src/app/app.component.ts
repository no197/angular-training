import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-word';
  isSuccess = true;

  buttonChanged(newValue) {
    console.log("Button changed!", newValue)
  }
}
