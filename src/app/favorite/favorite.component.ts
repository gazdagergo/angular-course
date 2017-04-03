import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `]
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;

  constructor() { }

  ngOnInit() {
  }

  @Output() starChange = new EventEmitter();

  toggleStar() {
    this.isFavorite = !this.isFavorite;
    this.starChange.emit({ newValue: this.isFavorite});
  } 

}
