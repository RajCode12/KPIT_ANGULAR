import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teachers:any[]=[
    {teacherId:1,teacherName:"Raj",teacherSalary:30000},
    {teacherId:2,teacherName:"Dev",teacherSalary:40000},
    {teacherId:3,teacherName:"Aditya",teacherSalary:50000}
  ]
  getAllTeachers() {
    return this.teachers;
  }
  addTeacher(teacher:any) {
    this.teachers.push(teacher);
  }
  deleteTeacher(t:any) {
    let index = this.teachers.findIndex((teacher)=>teacher.teacherId === t.teacherId);
    if(index != -1) {
      this.teachers.splice(index,1);
    }
  }
  constructor() { }
}
