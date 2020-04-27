import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_service/course.service';
import { Course } from 'src/app/_models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  newCourse:Course = new Course();
  constructor(
    private CourseService:CourseService,
    private route:Router
  ){}

  addNewCourse()
  {
    this.CourseService.addNewCourse(this.newCourse).subscribe(a =>{
      this.route.navigateByUrl("/course");
      this.CourseService.showCourseController = 0;
    })
  }
  ngOnInit(): void {
  }

}
