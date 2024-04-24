import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styles:`
    .right-align{
      float:right;
    }
  `
})

export class AddItemComponent {
  item:any={
    itemId:'',
    itemName:"",
    itemPrice:""
  }
  @Output() add= new EventEmitter();
  addHandler() {
    let obj={itemId:'',itemName:'',itemPrice:''};
    obj.itemId=this.item.itemId;
    obj.itemName=this.item.itemName;
    obj.itemPrice=this.item.itemPrice;
    this.add.emit(obj);
    this.item={};
    
  }
  resetHandler() {
    this.item.itemId=''
    this.item.itemName=""
    this.item.itemPrice=""
  }
  
}
