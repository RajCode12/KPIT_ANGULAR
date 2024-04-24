import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  @Output() add = new EventEmitter();
  teacher:any={
    teacherId:'',
    teacherName:'',
    teacherSalary:''
  }
  addHandler() {
    let obj = {teacherId:'',teacherName:'',teacherSalary:''};
    obj.teacherId = this.teacher.teacherId;
    obj.teacherName = this.teacher.teacherName;
    obj.teacherSalary = this.teacher.teacherSalary;
    this.add.emit(obj);
    this.teacher={};
  }
  resetHandler() {
    this.teacher={};
  }
}
