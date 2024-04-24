import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {
  service:TeacherService;
  teacher:any={
    teacherId:'',
    teacherName:'',
    teacherSalary:''
  }
  constructor(service:TeacherService) {
    this.service = service;
  }
  deleteHandler() {
    let obj={teacherId:'',teacherName:'',teacherSalary:''};
    obj.teacherId = this.teacher.teacherId;
    this.service.deleteTeacher(obj);
  }
}
