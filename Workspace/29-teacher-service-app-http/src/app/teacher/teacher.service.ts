
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  constructor(private http:HttpClient) { }
  
  getAllTeachers() {
    return this.http.get<any[]>("http://localhost:3000/teacher");
  }

  addTeacher(teacher:any) {
    return this.http.post("http://localhost:3000/teacher",teacher);
  }

  deleteTeacher(teacher:any) {
    return this.http.delete("http://localhost:3000/teacher",teacher.teacherId);
  }
}
