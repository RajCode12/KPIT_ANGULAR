import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-marathon-project';

  players:any[]=[
    {playerId:1,playerName:"Raj",playerAge:20},
    {playerId:2,playerName:"Dev",playerAge:22}
  ]
  
  addPlayer(player:any) {
    this.players.push(player);
  }
}
