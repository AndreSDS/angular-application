import { Component } from '@angular/core';

const RowsHigh: {
  [key: string]: number
} = {
  '1': 400,
  '3': 335,
  '4': 350,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cols = 3;
  rowHigh = RowsHigh[this.cols.toString()];
  category: string | undefined;

  constructor() { }

  ngOnInit(): void { }

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHigh = RowsHigh[this.cols.toString()];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
