import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css'
})
export class ListTeachersComponent {
  service:TeacherService;
  teachers:any[]=[];
  constructor(service:TeacherService) {
    this.service = service;
    this.teachers = this.service.getAllTeachers();
  }
}
