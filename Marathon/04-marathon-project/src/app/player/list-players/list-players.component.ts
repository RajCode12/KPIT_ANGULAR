import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrl: './list-players.component.css'
})
export class ListPlayersComponent {
  @Input() player:any={};
}
