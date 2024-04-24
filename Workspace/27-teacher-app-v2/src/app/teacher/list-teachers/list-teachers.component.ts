import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css'
})
export class ListTeachersComponent {
  @Input() teacher:any={};
}
