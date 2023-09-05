import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  addToCart(product: CartItem): void {
    const products = [...this.cart.value.items];

    const productInCart = products.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity++;
    } else {
      products.push(product);
    }

    this.cart.next({ items: products });
    this._snackBar.open('Product added to cart', 'Ok', {
      duration: 3000,
    });
  }

  improveQuantity(item: CartItem): void {
    const products = [...this.cart.value.items];

    const productInCart = products.find((p) => p.id === item.id);

    if (productInCart) {
      productInCart.quantity++;
    }

    this.cart.next({ items: products });
  };

  reduceQuantity(item: CartItem): void {
    const products = [...this.cart.value.items];

    const productInCart = products.find((p) => p.id === item.id)!;

    if (productInCart.quantity > 1) {
      productInCart.quantity--;
      this.cart.next({ items: products });
    } else {
      this.removeItem(item);
    }
  }

  getTotalCost(items: Array<CartItem>): number {
    return items.map(t => t.price * t.quantity).reduce((acc, current) => acc + current, 0);
  }

  removeItem(item: CartItem): void {
    const products = this.cart.value.items.filter((p) => p.id !== item.id);

    this.cart.next({ items: products });
    this._snackBar.open('Product removed from cart', 'Ok', {
      duration: 3000,
    });
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart cleared', 'Ok', {
      duration: 3000,
    });
  }
}
