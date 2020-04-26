import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl:string = "http://localhost:8080/Courses/";
  // List all Courses
  getAllCourses()
  {
    return this.http.get<Course[]>(this.baseUrl + "list");
  }
  constructor(
    private http:HttpClient
  ){}
}
