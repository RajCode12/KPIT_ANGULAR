import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-event-app';

  students:any[]=[
    {id:1,name:"Raj",marks:80},
    {id:2,name:"Dev",marks:90}
  ];

  addStudent(student:any) {
    this.students.push(student);
  }
  deleteStudent(s:any) {
    let index = this.students.findIndex((student) => student.id === s.id);
    if(index != -1) {
      this.students.splice(index,1);
    }
  }
}
