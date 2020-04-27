import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentBase } from '../../_models/student-base';
import {StudentService} from '../../_service/student.service'
import { DepartmentBase } from 'src/app/_models/department-base';
import { Course } from 'src/app/_models/course';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/_service/department.service';
import { CourseService } from 'src/app/_service/course.service';
@Component({
	selector: 'app-student-edit',
	templateUrl: './student-edit.component.html',
	styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input() myUpdatedStudent:StudentBase;
  Departments:DepartmentBase[] = [];
  Courses:Course[] = [];
  constructor(
    private student_service:StudentService,
    private r:Router,
    private deptService:DepartmentService,
    private courseService:CourseService
  ){}

  ngOnInit(): void {
    this.deptService.getAllDepartments().subscribe(Depts => {
      this.Departments = Depts;
    })
    this.courseService.getAllCourses().subscribe(myCourses => this.Courses = myCourses);
  }
  updateStudentValue()
  {
    this.student_service.updateStudentData(this.myUpdatedStudent).subscribe(data =>{
      this.r.navigateByUrl("/student");
    });
    this.student_service.showComponentController = 0;
  }

}
