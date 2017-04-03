import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styles: [`
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
    }
    .glyphicon-heart.liked {
      color: deeppink;
    }

  `]
})
export class HeartComponent implements OnInit {

  @Input() heartLiked;
  @Input() likeNum;

  constructor() { }

  ngOnInit() {
  }

  heartToggle() {
    this.heartLiked = !this.heartLiked;
    this.likeNum += this.heartLiked? 1 : -1;
  }

}
