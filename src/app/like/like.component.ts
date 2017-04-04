import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styles: [`
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
    }
    .glyphicon-heart.highlighted {
      color: deeppink;
    }
  `]
})
export class LikeComponent implements OnInit {
  @Input() iLiked;
  @Input() totalLikes;

  constructor() { }

  ngOnInit() {
  }

heartToggle() {
    this.iLiked = !this.iLiked;
    this.totalLikes += this.iLiked? 1 : -1;
  }

}
