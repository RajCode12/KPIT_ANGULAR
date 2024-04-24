import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {
  constructor(private service:TeacherService) {}
  
  teacher:any={
    teacherId:'',
    name:"",
    salary:''
  }
  deleteHandler() {
    this.service.deleteTeacher(this.teacher).subscribe(data => {
      console.log("Deleted Successfully");
    })
  }
}
