import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styles:`
    .box2{
      border:1px solid black;
      padding: 10px;
      background-color:red;
    }
  `
})
export class DeleteStudentComponent {
  service:StudentService;
  student:any={
    studentId:'',
    studentName:'',
    studentMarks:''
  };
  constructor(service:StudentService) {
    this.service=service;
  }
  deleteHandler() {
    let obj={studentId:'',studentName:'',studentMarks:''};
    obj.studentId=this.student.studentId;
    this.service.deleteStudent(obj);
    this.student={};
  }
}
