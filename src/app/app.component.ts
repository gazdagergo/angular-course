import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onClick($event) {
    console.log('Clicked', $event);
    $event.stopPropagation();
  }

  onDivClick() {
    console.log('Handled by Div');
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  saveMyVote($event) {
    console.log($event);
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    totalLikes: 10,
    iLike: false
  }

  votes = {
    voteCount: 9,
    myVote: -1
  }

}
