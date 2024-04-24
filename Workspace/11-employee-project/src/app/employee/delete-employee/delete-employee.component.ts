import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  service:EmployeeService;
  employee:any={
    employeeId:'',
    employeeName:'',
    employeeSalary:''
  }
  constructor(service:EmployeeService) {
    this.service = service;
  }
  deleteHandler() {
    let obj = {employeeId:'',employeeName:'',employeeSalary:''};
    obj.employeeId = this.employee.employeeId;
    this.service.deleteEmployee(obj);
    this.employee={};
  }
}
