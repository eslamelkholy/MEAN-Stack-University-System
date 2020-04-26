import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentBase } from '../../_models/student-base';
import { StudentService } from '../../_service/student.service';
import { Router } from '@angular/router';
import {DepartmentService} from '../../_service/department.service';
import { DepartmentBase } from 'src/app/_models/department-base';

@Component({
	selector: 'app-student-add',
	templateUrl: './student-add.component.html',
	styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  newStudent:StudentBase = new StudentBase();
  Departments:DepartmentBase[] = [];

  constructor(private student_service : StudentService,
    private r:Router,
    private deptService:DepartmentService
    ) {}

  addNewStudent()
  {
    this.student_service.addStudent(this.newStudent).subscribe(a =>{
      this.r.navigateByUrl("/student");
    })
  }
  ngOnInit(): void {
    this.deptService.getAllDepartments().subscribe(Depts => {
      this.Departments = Depts;
    })
  }


}
