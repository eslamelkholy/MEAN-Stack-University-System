import { Component, OnInit } from '@angular/core';
import { StudentBase } from '../_models/student-base';
import { StudentService } from '../_service/student.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	students:StudentBase[];
  constructor(
    public student_service:StudentService,
    private r:Router  
  ){}

  showAddNewComponent()
  {
    this.student_service.showComponentController = 2;
  }

  showDetails(id:number)
  {
    this.student_service.getStudentDetails(id).subscribe(std => this.student_service.currentStudent = std);
    this.student_service.showComponentController = 1;
  }

  editStudentDetails(id:number)
  {
    this.student_service.getStudentDetails(id).subscribe(std => this.student_service.currentStudent = std);
    this.student_service.showComponentController = 3;
  }
  deleteStudent(id:number)
  {
    this.student_service.deleteStudent(id).subscribe(data =>{
      this.r.navigateByUrl("/student");
    });
  }
  ngOnInit():void
  {
    this.student_service.getAllStudents().subscribe(a =>{
      this.students = a;
      console.log(a);
    });

  }
}
