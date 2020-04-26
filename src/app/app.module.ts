import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { MainComponent } from './department/main/main.component';
import { AddComponent } from './department/add/add.component';
import { DetailsComponent } from './department/details/details.component';
import { EditComponent } from './department/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from './course/course.component';
@NgModule({
	declarations: [
		AppComponent,
		StudentComponent,
		StudentDetailsComponent,
		StudentAddComponent,
		StudentEditComponent,
		MainComponent,
		AddComponent,
		DetailsComponent,
		EditComponent,
		CourseComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
