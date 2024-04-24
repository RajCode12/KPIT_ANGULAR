import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListPlayersComponent,
    AddPlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ListPlayersComponent,
    AddPlayerComponent
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
