import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  constructor(private service:TeacherService) {}

  onSubmit(form:NgForm) {
    this.service.addTeacher(form.value).subscribe(data => {
      alert("Student Added Sucessfully");
    })
    form.resetForm();
  }
}
