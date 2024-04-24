import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  employee:any={
    employeeId:'',
    employeeName:'',
    employeeSalary:''
  }
  @Output() delete = new EventEmitter();
  deleteHandler() {
    let obj = {employeeId:'',employeeName:'',employeeSalary:''};
    obj.employeeId = this.employee.employeeId;
    this.delete.emit(obj);
    this.employee={};
  }
}
