import { Component } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  ShoppingCart: ShoppingCart[] = [];

  items = [{ name: 'Acron Squash', imageUrl: 'acorn_squash' },
  { name: 'Bell Pepper', imageUrl: 'bell_pepper'},
  { name: 'Carrot', imageUrl: 'carrot'}];

  addItem(newItem: any) {
    this.items.push(newItem);
  }
}
