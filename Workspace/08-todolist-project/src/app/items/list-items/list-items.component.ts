import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styles:`
    .right-align{
      float:center;
    }
  `
})
export class ListItemsComponent {
  @Input() item:any={}
}
