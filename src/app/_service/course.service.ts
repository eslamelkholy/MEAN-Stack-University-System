import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl:string = "http://localhost:8080/Courses/";
  showCourseController:number = 0;
  currentCourse:Course = new Course();
  // List all Courses
  getAllCourses()
  {
    return this.http.get<Course[]>(this.baseUrl + "list");
  }
  // Get Specified Course
  getCourse(id:number)
  {
    return this.http.get<Course>(this.baseUrl + "details/"+ id);
  }
  // Add New Course
  addNewCourse(newCourse:Course)
  {
    return this.http.post<Course>(this.baseUrl + "add", newCourse);
  }
  // Update Course
  updateCourse(UpdatedCourse:Course)
  {
    return this.http.post<Course>(this.baseUrl + "edit", UpdatedCourse)
  }
  deleteCourse(id:number)
  {
    return this.http.get<Course>(this.baseUrl + "delete/" + id);
  }
  constructor(
    private http:HttpClient
  ){}
}
