import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  user:any={
    username:"",
    password:"",
    email:""
  }
  message:string="";
  registerForm:FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required)
    })
  }
  registerUser() {
    // this.user.username = this.registerForm.value.username;
    // this.user.password = this.registerForm.value.password;
    // this.user.email = this.registerForm.value.email;
    // alert("User Added Successfully");
    this.message = "User Added Successfully";
    this.registerForm.reset();
  }
  
}
