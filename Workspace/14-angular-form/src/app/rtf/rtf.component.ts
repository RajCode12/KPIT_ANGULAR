import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent implements OnInit {
  studentForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.studentForm= new FormGroup({
      studentId:new FormControl(null,Validators.required),
      studentName:new FormControl(null,Validators.required)
    });
  }
  students:any[]=[];
  onSubmit() {
    console.log(`value= ${JSON.stringify(this.studentForm.value)}`);
    console.log(`value = ${JSON.stringify(this.studentForm.touched)}`);
    console.log(`invalid = ${JSON.stringify(this.studentForm.invalid)}`);

    this.students.push(this.studentForm.value);
    this.studentForm.reset();
  }
  
}
