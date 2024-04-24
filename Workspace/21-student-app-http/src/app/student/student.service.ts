import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  
  addStudent(student:any) {
    return this.http.post("http://localhost:3000/students",student);
  }
  getAllStudents() {
    return this.http.get<any[]>("http://localhost:3000/students");
  }
  deleteStudent(student:any) {
    return this.http.delete("http://localhost:3000/students",student.id);
  }
}
