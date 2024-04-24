import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';



@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ListStudentsComponent,
    AddStudentComponent,
    DeleteStudentComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
