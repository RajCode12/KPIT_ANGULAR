import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css'
})
export class ListTeachersComponent {
  teachers:any[]=[];
  constructor(private service:TeacherService) {
    service.getAllTeachers().subscribe(data => {
      console.log(data);
      this.teachers = data;
    })
  }
}
