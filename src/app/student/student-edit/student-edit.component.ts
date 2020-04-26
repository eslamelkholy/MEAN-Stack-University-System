import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentBase } from '../../_models/student-base';
import {StudentService} from '../../_service/student.service'
import { Router } from '@angular/router';
@Component({
	selector: 'app-student-edit',
	templateUrl: './student-edit.component.html',
	styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
	@Input() myUpdatedStudent:StudentBase;
  constructor(
    private student_service:StudentService,
    private r:Router
  ){}

  ngOnInit(): void {
  }
  updateStudentValue()
  {
    this.student_service.updateStudentData(this.myUpdatedStudent).subscribe(data =>{
      this.r.navigateByUrl("/student");
    });
    this.student_service.showComponentController = 0;
  }

}
