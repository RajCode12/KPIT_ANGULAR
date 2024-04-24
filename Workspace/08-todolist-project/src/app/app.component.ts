import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08-todolist-project';
  
  items:any[]=[
    // {itemId:1,itemName:"Potato",itemPrice:40},
    // {itemId:2,itemName:"Tomato",itemPrice:50},
    // {itemId:3,itemName:"Carrot",itemPrice:60}
  ]
  addItem(item:any) {
    this.items.push(item);
  }
  deleteItem(itemId:any) {
    const index = this.items.find(item => item.id === itemId);
      if(index !== -1) {
        this.items.splice(index,1);
    }
  }
}
