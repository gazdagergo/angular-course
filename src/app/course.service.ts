import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() {
    console.log('course service initialized...');
   }

   getCourses() : string[] {
     return ["Course1", "Course2", "Course3"];
   }

}
