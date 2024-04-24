import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles:`
    .style1{
      border: 1px red solid;
      padding: 10px 10px 10px 10px;
      font-color: black;
      background-color:yellow;
    }
  `
})
export class StudentComponent { 
  roll:number=1
  name:string="Raj"
  address:string="Bihar"

  
  
}
