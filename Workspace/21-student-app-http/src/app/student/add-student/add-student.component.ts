import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private service:StudentService) {}
  addHandler(form:NgForm) {
    this.service.addStudent(form.value).subscribe(data=> {
      alert("Student Added Successfully");
    });
    form.resetForm();
  }
  resetHandler(form:NgForm) {
    form.resetForm();
  }
}
