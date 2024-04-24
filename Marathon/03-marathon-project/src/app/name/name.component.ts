import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  
  lastName:string="";
  onSubmit() {
    this.lastName = "";
  }
}
