import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  service:StudentService;
  constructor(service:StudentService) {
    this.service = service;
  }
  student:any={
    id:'',
    name:"",
    marks:''
  }
  deleteHandler() {
    let obj = {id:'',name:"",marks:''};
    obj.id = this.student.id;
    this.service.deleteStudent(obj);
    this.student = {};
  }
}
