import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styles: [`
    .vote-wrap {
      color: #ccc;
      font-size: 33px;
      width: 32px;
      text-align: center;
      line-height: 1;
    }
    .glyphicon {
      cursor: pointer;
    }
    .highlighted {
      color: orange;
    }

  `]
})
export class VoteComponent implements OnInit {
  @Input() voteCount;
  @Input() myVote;

  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp() {
    this.voteCount += this.myVote < 1 ? 1 : 0;
    this.myVote += this.myVote < 1 ? 1 : 0;
    this.vote.emit({myVote: this.myVote, voteCount: this.voteCount});  
  }

  voteDown() {
    this.voteCount -= this.myVote > -1 ? 1 : 0;
    this.myVote -= this.myVote > -1 ? 1 : 0;
    this.vote.emit({myVote: this.myVote, voteCount: this.voteCount});
  }


}
