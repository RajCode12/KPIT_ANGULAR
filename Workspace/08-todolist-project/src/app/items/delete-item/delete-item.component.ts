import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.css'
})
export class DeleteItemComponent {
  itemId:any;
  @Output() delete= new EventEmitter<any>();
  deleteHandler() {
    this.delete.emit(this.itemId);
  }
}
