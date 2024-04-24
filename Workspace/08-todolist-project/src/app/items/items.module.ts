import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { DeleteItemComponent } from './delete-item/delete-item.component';



@NgModule({
  declarations: [
    ListItemsComponent,
    AddItemComponent,
    DeleteItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddItemComponent,
    ListItemsComponent,
    DeleteItemComponent
  ]
})
export class ItemsModule { }
