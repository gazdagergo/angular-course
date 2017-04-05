import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;

  constructor() { }

  ngOnInit() {
  }

   toggleStar() {
    this.isFavorite = !this.isFavorite;
  } 

}
