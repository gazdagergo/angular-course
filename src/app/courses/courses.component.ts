import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [ CourseService ]
})
export class CoursesComponent implements OnInit {
  title = "The title of courses page";
  courses;

  constructor(private _courseService: CourseService) {
    this.courses = _courseService.getCourses();
  } 

  ngOnInit() {
  }


}
