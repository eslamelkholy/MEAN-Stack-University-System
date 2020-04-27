import { Component, OnInit } from '@angular/core';
import { CourseService } from '../_service/course.service';
import { Course } from '../_models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  Courses:Course[];
  constructor(public CourseService:CourseService
  
  ) {}
  ngOnInit(): void {
    this.CourseService.getAllCourses().subscribe(myCoursesData => {
      this.Courses = myCoursesData;
    });
  }

  showAddNewCourseComponent()
  {
    this.CourseService.showCourseController = 1;
  }
  editCourse(id:number)
  {
    this.CourseService.getCourse(id).subscribe(myCourse => this.CourseService.currentCourse = myCourse);
    this.CourseService.showCourseController = 2;
  }
  deleteCourse(id:number)
  {
    this.CourseService.deleteCourse(id).subscribe(res => console.log(res));
  }

}
