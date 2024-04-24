import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  students:any[]=[
    {id:1,name:"Raj",marks:80},
    {id:2,name:"Dev",marks:90}
  ];
  
  getAllStudents() {
    return this.students;
  }
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
