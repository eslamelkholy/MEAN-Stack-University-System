import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {StudentService} from '../../_service/student.service'
@Component({
	selector: 'app-student-details',
	templateUrl: './student-details.component.html',
	styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
	constructor(public std_service:StudentService) {
	}
	removeAllUiComponent()
	{
		this.std_service.showComponentController = 0;
	}
	ngOnInit(): void {
	}
}
