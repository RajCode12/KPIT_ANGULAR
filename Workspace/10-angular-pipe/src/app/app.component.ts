import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '10-angular-pipe';

  num:number=10;
  companyName:string="KPIT";
  student:any={
    studentId:1,
    studentName:"Dev",
    studentMarks:99
  }
  studentNames:string[]=["Raj","Dev","Aditya","Abhay","Gaurav"];
  name:string="";
  
}
