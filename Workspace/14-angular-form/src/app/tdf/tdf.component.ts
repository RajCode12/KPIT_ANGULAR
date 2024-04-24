import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  studentId:number=0
  studentName:string=""
  onSubmit(form:NgForm) {
    console.log("form submitted...");
    console.log(JSON.stringify(form.value));
    console.log(JSON.stringify(form.touched));
    console.log(JSON.stringify(form.valid));

  }
  
}
