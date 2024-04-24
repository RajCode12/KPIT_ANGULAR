import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  student:any={
    id:'',
    name:"",
    marks:''
  }
  @Output() delete = new EventEmitter();
  deleteHandler() {
    let obj = {id:'',name:"",marks:''};
    obj.id = this.student.id;
    this.delete.emit(obj);
    this.student={};
  }
}
