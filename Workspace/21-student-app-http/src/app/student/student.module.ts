import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddStudentComponent,
    ListStudentsComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    AddStudentComponent,
    ListStudentsComponent,
    DeleteStudentComponent
  ],
  providers:[
    StudentService
  ]
})
export class StudentModule { }
