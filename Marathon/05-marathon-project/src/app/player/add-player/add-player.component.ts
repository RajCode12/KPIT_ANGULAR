import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {
  constructor(private service:PlayerService) {}

  onSubmit(form:NgForm) {
    this.service.addPlayer(form.value).subscribe(data => {
      alert("Player Added Successfully");
    })
  }
}
