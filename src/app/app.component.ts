import { ILike } from './like/like.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-word';
  isSuccess = true;
  tweet = {
    isLiked: false,
    likeCount: 0
  }

  onChange(newValue: ILike) {
    this.tweet = newValue;
  }

  buttonChanged(newValue) {
    console.log("Button changed!", newValue)
  }
}
