import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListPlayersComponent,
    AddPlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListPlayersComponent,
    AddPlayerComponent
  ]
})
export class PlayerModule { }
