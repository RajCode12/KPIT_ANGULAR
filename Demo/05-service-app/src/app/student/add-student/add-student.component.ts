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

  onSubmit(form:NgForm) {
    this.service.addStudent(form.value);
    form.resetForm();
  }
}
