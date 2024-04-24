import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  // injecting student service inside this component (dependency injection)
  service:StudentService;
  students:any[]=[];
  constructor(service:StudentService) {
    this.service = service;
    this.students=this.service.getallStudents();
  }
}
