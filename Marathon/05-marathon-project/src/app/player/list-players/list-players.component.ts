import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrl: './list-players.component.css'
})
export class ListPlayersComponent {
  players:any[]=[];
  constructor(private service:PlayerService) {
    this.service.getAllPlayers().subscribe(data => {
      this.players = data;
    })
  }
  idx:number=0;
  getColor() {
    if(this.players[this.idx].playerAge > 40) {
      this.idx++;
      return "red";
    } else {
      this.idx++;
      return "green";
    }
  }
}
