import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employee:any={
    employeeId:'',
    employeeName:'',
    employeeSalary:''
  }
  @Output() add=new EventEmitter();
  addHandler() {
    let obj = {employeeId:'',employeeName:'',employeeSalary:''};
    obj.employeeId = this.employee.employeeId;
    obj.employeeName = this.employee.employeeName;
    obj.employeeSalary = this.employee.employeeSalary;
    this.add.emit(obj);
    this.employee={};
  }
  resetHandler() {
    this.employee={};
  }
}
