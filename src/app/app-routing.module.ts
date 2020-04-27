import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import {MainComponent} from './department/main/main.component';
import {AddComponent} from './department/add/add.component';
import { CourseComponent } from './course/course.component';
const routes: Routes = [
	{ path: 'student/details/:id', component: StudentDetailsComponent },
	{ path: 'student/edit/:id', component: StudentEditComponent },
	{ path: 'student/add', component: StudentAddComponent},
	{ path: 'student', component: StudentComponent },
	{ path: 'department', component: MainComponent},
	{ path: 'department/add', component: AddComponent},
	{ path: 'course', component :CourseComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }