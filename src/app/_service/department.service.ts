import { Injectable } from '@angular/core';
import { DepartmentBase } from '../_models/department-base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl:string = "http://localhost:8080/Departments/";
  currentDepartment:DepartmentBase = new DepartmentBase();
  showDepartmentController:number = 0;

  // List all Department
  getAllDepartments()
  {
    return this.http.get<DepartmentBase[]>(this.baseUrl + "list");
  }
  // Get Specified Department Details
  getDepartment(id:number)
  {
    return this.http.get<DepartmentBase>(this.baseUrl + "details/"+ id );
  }
  // Add New Department
  addDepartment(dept:DepartmentBase)
  {
    return this.http.post<DepartmentBase>(this.baseUrl + "add", dept);
  }
  // Update Department
  updateDepartment(dept:DepartmentBase)
  {
    return this.http.post<DepartmentBase>(this.baseUrl + "edit/"+ dept._id, dept);
  }
  // Delete Department
  deleteDepartment(id:number)
  {
    return this.http.get<DepartmentBase>(this.baseUrl + "delete/"+ id);
  }

  constructor(private http:HttpClient) { }
}
