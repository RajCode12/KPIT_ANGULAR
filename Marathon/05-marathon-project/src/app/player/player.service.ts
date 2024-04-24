import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getAllPlayers() {
    return this.http.get<any[]>("http://localhost:3000/players");
  }
  addPlayer(player:any) {
    return this.http.post("http://localhost:3000/players",player);
  }
}
