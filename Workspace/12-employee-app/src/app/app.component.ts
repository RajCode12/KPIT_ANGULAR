import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '12-employee-app';

  employees:any[]=[
    {employeeId:1,employeeName:"Raj",employeeSalary:20000},
    {employeeId:2,employeeName:"Dev",employeeSalary:30000},
    {employeeId:3,employeeName:"Aditya",employeeSalary:40000}
  ]
  addEmployee(employee:any) {
    this.employees.push(employee);
  }
  deleteEmployee(emp:any) {
    let index = this.employees.findIndex((employee) => employee.employeeId === emp.employeeId);
    if(index != -1) {
      this.employees.splice(index,1);
    }
  }
}
