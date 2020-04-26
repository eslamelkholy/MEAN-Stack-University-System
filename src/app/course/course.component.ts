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

  }
  showDetails(id:number)
  {

  }
  editCourse(id:number)
  {

  }
  deleteCourse(id:number)
  {

  }

}
