import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DeleteTeacherComponent } from './delete-teacher/delete-teacher.component';
import { FormsModule } from '@angular/forms';
import { TeacherService } from './teacher.service';



@NgModule({
  declarations: [
    ListTeachersComponent,
    AddTeacherComponent,
    DeleteTeacherComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
