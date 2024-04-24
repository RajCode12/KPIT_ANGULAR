import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '18-angular-lifecycle-v2';

  flag:boolean=true;
  onClick() {
    this.flag = !this.flag;
  }
}
