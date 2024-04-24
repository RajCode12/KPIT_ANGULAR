import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit{
  studentForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.studentForm=new FormGroup({
      studentId:new FormControl(null,Validators.required),
      studentName:new FormControl(null,Validators.required),
      studentMarks:new FormControl(null,Validators.required)
    })
  }
  students:any[]=[];
  onSubmit() {
    this.students.push(this.studentForm.value);
    this.studentForm.reset();
  }
  
}
