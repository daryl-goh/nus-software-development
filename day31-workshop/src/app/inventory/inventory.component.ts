import { Component, Output, EventEmitter } from '@angular/core';
import { Inventory } from '../models/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventory: Inventory[] = []; 

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    // alert("Added to cart")
  }

}
