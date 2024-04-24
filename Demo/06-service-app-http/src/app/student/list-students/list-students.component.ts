import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  students:any[]=[];
  constructor(private service:StudentService) {
    service.getAllStudents().subscribe(data => {
      this.students = data;
    })
  }
  
}
