import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() itemList: any[] = []; 

  @Output() newItemEvent = new EventEmitter<any>();

  onItemClick(item: any) {
    this.newItemEvent.emit(item);
  }
}
