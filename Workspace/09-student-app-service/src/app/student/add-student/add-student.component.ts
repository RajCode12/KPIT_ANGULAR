import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles:`
    .box{
      border: 1px black solid;
      padding: 10px;
      background-color:green;
    }
  `
})
export class AddStudentComponent {
  service:StudentService;
  student:any={
    studentId:'',
    studentName:"",
    studentMarks:""
  }
  constructor(service:StudentService) {
    this.service=service;
  }
  addHandler() {
    let obj={studentId:'',studentName:'',studentMarks:''};
    obj.studentId = this.student.studentId;
    obj.studentName = this.student.studentName;
    obj.studentMarks = this.student.studentMarks;
    this.service.addStudent(obj);
    this.student={};
  }
}
