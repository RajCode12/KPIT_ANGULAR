import { Component, OnInit } from '@angular/core';
import { StudentModule } from '../student.module';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{
  studentForm:FormGroup = new FormGroup({});
  constructor(private service:StudentService) {}
  ngOnInit():void {
    this.studentForm = new FormGroup( {
      id : new FormControl(null,Validators.required),
      name: new FormControl(null,Validators.required),
      marks: new FormControl(null,Validators.required)
    });
  }
  onSubmit() {
    this.service.addStudent(this.studentForm.value).subscribe(data => {
      alert("Student Added Successfully");
    })
  }
} 
