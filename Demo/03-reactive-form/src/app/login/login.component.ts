import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  students:any[]=[];
  studentForm:FormGroup = new FormGroup({});
  res:boolean=true;
  message:string="";
  ngOnInit() {
      this.studentForm = new FormGroup({
        id: new FormControl(null,Validators.required),
        password: new FormControl(null,Validators.required)
      })
  }
  onSubmit() {
    if(this.studentForm.value.id == 1 && this.studentForm.value.password == "raj") {
      this.res = true;
      this.message = "Login Successfully";
    } else {
      this.res = false;
      this.message = "Invalid Id or Password";
    }
    this.students.push(this.studentForm.value);
    this.studentForm.reset();
  }
  getBackgroundColor() {
    if(this.res) {
      return "green";
    } else {
      return "red";
    }
  }
}
