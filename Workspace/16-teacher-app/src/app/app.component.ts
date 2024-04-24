import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '16-teacher-app';

  teachers:any[]=[
    {teacherId:1,teacherName:"Raj",teacherSalary:20000},
    {teacherId:2,teacherName:"Dev",teacherSalary:30000},
    {teacherId:3,teacherName:"Aditya",teacherSalary:40000}
  ]
  addTeacher(teacher:any) {
    this.teachers.push(teacher);
  }
  deleteTeacher(t:any) {
    let index = this.teachers.findIndex((teacher)=> teacher.teacherId === t.teacherId);
    if(index != -1) {
      this.teachers.splice(index,1);
    }
  }
}
