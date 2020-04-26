import { Component, OnInit } from '@angular/core';
import { DepartmentBase } from '../../_models/department-base';
import { DepartmentService } from '../../_service/department.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	Departments:DepartmentBase[];
	constructor(
		public department_service:DepartmentService,
		public r:Router
	){}
	showAddDeptComponent()
	{
		this.department_service.showDepartmentController = 1;
	}
	// Show Department Details
	showDetails(id:number)
	{
		this.department_service.getDepartment(id).subscribe(dept => {
			this.department_service.currentDepartment = dept;
		});
		this.department_service.showDepartmentController = 2;
	}
	// Show Edit Details
	showEdit(id:number)
	{
		this.department_service.getDepartment(id).subscribe(dept => {
			this.department_service.currentDepartment = dept;
		});
		this.department_service.showDepartmentController = 3;
	}
	// Delete Department
	deleteDepartment(id:number)
	{
		this.department_service.deleteDepartment(id).subscribe(dept =>{
			this.r.navigateByUrl("/department");
		})
	}

	ngOnInit(): void {
		this.department_service.getAllDepartments().subscribe(depts => this.Departments = depts);
	}

}
