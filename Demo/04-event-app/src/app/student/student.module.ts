import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListStudentsComponent,
    AddStudentComponent,
    DeleteStudentComponent
  ]
})
export class StudentModule { }
