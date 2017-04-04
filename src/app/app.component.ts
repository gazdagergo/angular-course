import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tweets = [
    {text: "bee", totalLikes: 4, iLiked: false},
    {text: "beu", totalLikes: 14, iLiked: true},
    {text: "baaa", totalLikes: 4, iLiked: false}
  ];

}
