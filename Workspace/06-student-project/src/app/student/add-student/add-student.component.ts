import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles:`
    .style1{
      border: 1px solid black;
      padding: 10px;
      background-color: gray;
    }
    .box{
      border: 1px solid black;
      padding: 10px;
      background-color: green;
    }
  `
})
export class AddStudentComponent {
  student:any={
    studentId:'',
    studentName:"",
    studentAddress:""
  }
  @Output() add=new EventEmitter();  //custom event generator to add data
  addHandler() {
    //alert(JSON.stringify(this.student))
    this.add.emit(this.student);
  }
}
