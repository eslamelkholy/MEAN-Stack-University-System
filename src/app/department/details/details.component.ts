import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepartmentBase } from '../../_models/department-base';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	constructor(public deptService:DepartmentService) { 
	}

	removeAllUiComponent(){
		this.deptService.showDepartmentController = 0;
	}
	ngOnInit(): void {
		
	}

}
