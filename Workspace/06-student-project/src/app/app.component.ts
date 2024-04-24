import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-student-project';
  students:any[]=[
    {studentId:101,studentName:"Raj",studentAddress:"Patna"},
    {studentId:102,studentName:"Dev",studentAddress:"Up"},
    {studentId:103,studentName:"Aditya",studentAddress:"Delhi"}
  ]
  addStudent(student:any) {
    this.students.push(student);
  }
}
