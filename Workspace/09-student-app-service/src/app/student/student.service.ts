import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:any[]=[
    {studentId:1,studentName:"Raj",studentMarks:70},
    {studentId:2,studentName:"Dev",studentMarks:80},
    {studentId:3,studentName:"Aditya",studentMarks:90}
  ]
  getallStudents() {
    return this.students;
  }
  addStudent(student:any) {
    this.students.push(student);
  }
  deleteStudent(s:any) {
    let index = this.students.findIndex((student) => student.studentId === s.studentId);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
  constructor() { }
}
