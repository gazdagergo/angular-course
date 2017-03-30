import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() {
      console.log('author service initialized...');
  }    

  getAuthors() {
    return ["Author1", "Author2", "Author3"];
  }


}
