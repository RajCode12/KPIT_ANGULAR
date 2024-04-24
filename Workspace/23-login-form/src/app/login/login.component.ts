import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  students:any[]=[];
  index:number=0;
  res:boolean=true;
  onSubmit(form:NgForm) {
    if(form.value.id === 1 && form.value.password === 'raj') {
      this.res = true;
    } else {
      this.res = false;
    }
    this.index++;
    this.students.push(form.value);
  }
  getBackgroundColor(i:number):string {
    return i === this.index ? 'red' : 'green';
  }
}
