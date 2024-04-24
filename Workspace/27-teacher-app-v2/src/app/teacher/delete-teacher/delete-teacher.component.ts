import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {
  teacher:any={
    id:'',
    name:"",
    salary:''
  }
  @Output() delete = new EventEmitter();
  deleteHandler() {
    let obj={id:'',name:"",salary:''};
    obj.id = this.teacher.id;
    this.delete.emit(obj);
    this.teacher = {};
  }
}
