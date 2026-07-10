import { Component } from '@angular/core';
import { ShoppingCart } from './shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  ShoppingCart: ShoppingCart[] = [];
}
