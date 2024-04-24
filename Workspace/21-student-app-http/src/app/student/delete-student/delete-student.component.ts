import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  constructor(private service:StudentService) {
    
  }
  deleteHandler() {
    let obj={studentId:'',studentName:'',studentMarks:''};
    this.service.deleteStudent(obj);
    //this.resetForm();
  }
}
