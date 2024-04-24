import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '13-angular-lifecycle';
  flag:boolean=true;
  onClick() {
    this.flag=!this.flag;
  }
  
}
