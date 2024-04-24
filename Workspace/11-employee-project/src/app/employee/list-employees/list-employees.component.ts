import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  service:EmployeeService;
  employees:any[]=[];
  constructor(service:EmployeeService) {
    this.service = service;
    this.employees = this.service.listEmployees();
  }
}
