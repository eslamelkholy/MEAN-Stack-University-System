import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartmentBase } from '../../_models/department-base';
import {DepartmentService} from '../../_service/department.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	@Output() createNewDepartment:EventEmitter<DepartmentBase>
	newDepartment: DepartmentBase=new DepartmentBase();

	constructor(private deptService : DepartmentService,
		private r:Router
	) {}
	addNewDepartment()
	{
		this.deptService.addDepartment(this.newDepartment).subscribe(a => {
			this.r.navigateByUrl("/department");
		})
	}
	ngOnInit(): void {
	}

}
