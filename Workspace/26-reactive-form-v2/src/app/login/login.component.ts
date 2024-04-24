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
  ngOnInit() {
    this.studentForm = new FormGroup({
      id:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
    console.log(this.studentForm.invalid);
  }
  message:string="";
  res:boolean = true;
  onSubmit() {
    if(this.studentForm.value.id == 1 && this.studentForm.value.password == "raj") {
      this.message = "Login Successfully";
      this.res = true;
    } else {
      this.message = "Invalid Id or Password";
      this.res = false;
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
