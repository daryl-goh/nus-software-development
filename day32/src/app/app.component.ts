import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd32_csflecture';

  items = [
    {name:'AirPod', id: 1, price: 250},
    {name:'iPhone', id: 2, price: 1200},
    {name:'Mac Mini', id: 3, price: 1500}
  ]
  selectedItem: any;

  onItemReceive(item: any) {
    this.selectedItem = item;
  }
}
