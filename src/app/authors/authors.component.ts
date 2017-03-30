import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [ AuthorService ]
})
export class AuthorsComponent implements OnInit {
  title = "Title for the authors page";
  authors;

  constructor(private _authorService: AuthorService) { 
    this.authors = _authorService.getAuthors();
  }

  ngOnInit() {
  }

}
