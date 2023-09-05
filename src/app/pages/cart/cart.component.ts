import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Cart = { items: [] };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'actions'];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }

  onImproveQuantity(item: CartItem): void {
    this.cartService.improveQuantity(item);
  }

  onReduceQuantity(item: CartItem): void {
    this.cartService.reduceQuantity(item);
  }

  getTotalCost(items: Array<CartItem>): number {
    return this.cartService.getTotalCost(items);
  }

  onRemoveItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

}
