import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  teacher:any={
    id:'',
    name:"",
    salary:''
  }
  @Output() add = new EventEmitter();
  addHandler() {
    let obj = {id:'',name:"",salary:''};
    obj.id = this.teacher.id;
    obj.name = this.teacher.name;
    obj.salary = this.teacher.salary;
    this.add.emit(obj);
    this.teacher={};
  }
  resetHandler() {
    this.teacher={};
  }
}
