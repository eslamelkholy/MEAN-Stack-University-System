import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DepartmentBase } from '../../_models/department-base';
import { DepartmentService } from 'src/app/_service/department.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	@Input() updatedDepartment:DepartmentBase;
	constructor(
		private deptService:DepartmentService,
		private r:Router
	){}

	updateDepartment() {
		this.deptService.updateDepartment(this.updatedDepartment).subscribe(dept =>{
			this.r.navigateByUrl("/department");
			this.deptService.showDepartmentController = 0;
		})
	}

	ngOnInit(): void {
	}

}