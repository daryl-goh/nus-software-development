import { Component } from '@angular/core';
import { Inventory } from './inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  AddToCart(): void {
    alert("Added to cart")


  }

  InventoryList: Inventory[] = [];

}
