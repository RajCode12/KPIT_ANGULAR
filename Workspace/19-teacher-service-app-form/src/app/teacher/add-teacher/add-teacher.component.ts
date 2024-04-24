import { Component } from '@angular/core';
import { TeacherModule } from '../teacher.module';
import { TeacherService } from '../teacher.service';
import { NgForm } from '@angular/forms';

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
  
  onSubmit(form:NgForm) {
    this.service.addTeacher(form.value);
    form.reset();
  }
  resetHanlder(form:NgForm) {
    form.reset();
  }
}
