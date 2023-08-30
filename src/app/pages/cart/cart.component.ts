import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Cart = {
    items: [
      { product: '"https://placehold.co/150"', name: 'snickears', price: 150, quantity: 1, id: 1 },
      { product: '"https://placehold.co/150"', name: 'snickears', price: 150, quantity: 1, id: 2 },
      { product: '"https://placehold.co/150"', name: 'snickears', price: 150, quantity: 1, id: 3 },
      { product: '"https://placehold.co/150"', name: 'snickears', price: 150, quantity: 1, id: 4 },
    ]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'actions'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotalCost(): number {
    return this.cart.items.map(t => t.price * t.quantity).reduce((acc, current) => acc + current, 0);
  }

  clearCart(): void {
    this.cart.items = [];
  }

}
