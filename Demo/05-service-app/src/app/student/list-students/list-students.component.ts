import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  service:StudentService;
  students:any[]=[]
  constructor(service:StudentService) {
    this.service = service;
    this.students = this.service.getAllStudents();
  }
}
