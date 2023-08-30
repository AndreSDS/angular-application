import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void { }

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHigh = RowsHigh[this.cols.toString()];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
