import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() totalLikes;
  @Input() iLiked;
  @Input() text;
  @Input() i;


}
