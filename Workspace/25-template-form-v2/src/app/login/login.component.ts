import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  students:any[]=[];
  message:string="";
  res:boolean=true;
  onSubmit(form:NgForm) {
    if(form.value.id == 1 && form.value.password == "raj") {
      this.message = "Login Successfully";
      this.res = true;
    } else {
      this.message = "Invalid Id or Password";
      this.res = false;
    }
    this.students.push(form.value);
  }
  getBackgroundColor() {
    if(this.res) {
      return "green";
    } else{
      return "red";
    }
  }
}
