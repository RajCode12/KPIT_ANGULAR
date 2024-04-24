import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {
  service:TeacherService;
  constructor(service:TeacherService) {
    this.service = service;
  }
  teacher:any={
    id:'',
    name:"",
    salary:''
  }
  deleteHandler() {
    let obj = {id:'',name:"",salary:''};
    obj.id = this.teacher.id;
    this.service.deleteTeacher(obj);
    this.teacher = {};
  }
}
