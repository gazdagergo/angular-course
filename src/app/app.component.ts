import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isFavorite = false;

  onClick($event) {
    console.log('Clicked', $event);
    $event.stopPropagation();
  }

  onDivClick() {
    console.log('Handled by Div');
  }

  toggleStar() {
    this.isFavorite = !this.isFavorite;
  }

}
