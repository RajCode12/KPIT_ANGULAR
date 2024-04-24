import { Component } from '@angular/core';
import { TeacherModule } from '../teacher.module';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  service:TeacherService;
  teacher:any={
    teacherId:'',
    teacherName:'',
    teacherSalary:''
  }
  constructor(service:TeacherService) {
    this.service = service;
  }
  addHandler() {
    let obj={teacherId:'',teacherName:'',teacherSalary:''};
    obj.teacherId = this.teacher.teacherId;
    obj.teacherName = this.teacher.teacherName;
    obj.teacherSalary = this.teacher.teacherSalary;
    this.service.addTeacher(obj);
    this.teacher={};
  }
  resetHandler() {
    this.teacher={};
  }
}
