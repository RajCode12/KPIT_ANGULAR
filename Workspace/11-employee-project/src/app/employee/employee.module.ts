import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    ListEmployeesComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListEmployeesComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
