import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teachers:any[]=[
    {id:1,name:"Raj",salary:20000},
    {id:2,name:"Dev",salary:30000},
    {id:3,name:"Aditya",salary:40000}
  ];
  getAllTeachers() {
    return this.teachers;
  }
  addTeacher(teacher:any) {
    this.teachers.push(teacher);
  }
  deleteTeacher(t:any) {
    let index = this.teachers.findIndex((teacher) => teacher.id === t.id);
    if(index != -1) {
      this.teachers.splice(index,1);
    }
  }
  constructor() { }
}
