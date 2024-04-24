import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {
  @Output() delete= new EventEmitter();
  teacher:any={
    teacherId:'',
    teacherName:'',
    teacherSalary:''
  }
  deleteHandler() {
    let obj = {teacherId:'', teacherName:'',teacherSalary:''};
    obj.teacherId = this.teacher.teacherId;
    this.delete.emit(obj);
    this.teacher={};
  }
}
