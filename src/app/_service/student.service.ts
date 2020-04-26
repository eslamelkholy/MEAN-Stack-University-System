import { Injectable } from '@angular/core';
import { StudentBase } from '../_models/student-base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  showComponentController:number = 0;
  currentStudent:StudentBase = new StudentBase();
  baseUrl:string = "http://localhost:8080/Students/";
  // List All Students
  getAllStudents()
  {
    return this.http.get<StudentBase[]>(this.baseUrl + "list");
  }
  // Get Specified Student
  getStudentDetails(id:number)
  {
    return this.http.get<StudentBase>(this.baseUrl + "details/" + id);
  }
  // Add New Student
  addStudent(std:StudentBase)
  {
    return this.http.post<StudentBase>(this.baseUrl + "add", std);
  }
  // Update Student Data
  updateStudentData(std:StudentBase)
  {
    return this.http.post<StudentBase>(this.baseUrl + "edit/" + std._id, std);
  }
  // Delete Student
  deleteStudent(id:number)
  {
    return this.http.get<StudentBase>(this.baseUrl + "/delete/" + id);
  }
  constructor(private http:HttpClient) {
  }
}
