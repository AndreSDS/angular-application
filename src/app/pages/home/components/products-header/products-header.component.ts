import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = "desc";
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void { }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(columns: number): void {
    this.columnsCountChange.emit(columns);
  }

}
