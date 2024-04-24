import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {
  
  @Output() add = new EventEmitter();
  onSubmit(form:NgForm) {
    this.add.emit(form.value);
    form.resetForm();
  }
}
