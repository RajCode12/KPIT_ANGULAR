import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  service:TeacherService;
  constructor(service:TeacherService) {
    this.service = service;
  }
  teacher:any={
    id:'',
    name:"",
    salary:''
  }
  addHandler() {
    let obj = {id:'',name:"",salary:''};
    obj.id = this.teacher.id;
    obj.name = this.teacher.name;
    obj.salary = this.teacher.salary;
    this.service.addTeacher(obj);
    this.teacher = {};
  }
  resetHandler() {
    this.teacher = {};
  }
}
