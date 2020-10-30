import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input("likeCount") likeCount: number;
  @Input("isActive") isActive: boolean;

  @Output("change") change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    let changeValue = this.isActive ? 1 : -1;
    this.likeCount += changeValue;

    this.change.emit({ isLiked: this.isActive, likeCount: this.likeCount });
  }

  constructor() { }

  ngOnInit(): void {
  }

}


export interface ILike {
  likeCount: number;
  isLiked: boolean;
}
