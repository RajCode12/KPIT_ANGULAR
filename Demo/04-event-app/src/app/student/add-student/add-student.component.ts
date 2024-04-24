import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student:any={
    id:'',
    name:"",
    marks:''
  }
  @Output() add = new EventEmitter();
  addHandler() {
    let obj = {id:'',name:"",marks:''};
    obj.id = this.student.id;
    obj.name = this.student.name;
    obj.marks = this.student.marks;
    this.add.emit(obj);
    this.student = {};
  }
}
