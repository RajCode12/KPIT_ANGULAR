import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

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
  // service:StudentService;
  // constructor(service:StudentService) {
  //   this.service=service;
  // }
  constructor(private service:StudentService) {}
  addHandler(form:NgForm) {
    this.service.addStudent(form.value);
  }
  resetHandler(form:NgForm) {
    form.resetForm();
  }
}
