import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @Input() myCourse:Course;
  constructor(
    private courseService:CourseService,
    private Route:Router
  ){ }

  ngOnInit(): void {
  }
  updateCourse()
  {
    this.courseService.updateCourse(this.myCourse).subscribe(a => console.log(a));
  }

}
