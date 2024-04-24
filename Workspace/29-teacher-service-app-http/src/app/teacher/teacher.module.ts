import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DeleteTeacherComponent } from './delete-teacher/delete-teacher.component';
import { FormsModule } from '@angular/forms';
import { TeacherService } from './teacher.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListTeachersComponent,
    AddTeacherComponent,
    DeleteTeacherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ListTeachersComponent,
    AddTeacherComponent,
    DeleteTeacherComponent
  ],
  providers: [
    TeacherService
  ]
})
export class TeacherModule { }
