import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Product 1',
    price: 100,
    category: 'shoes',
    description: 'Description 1',
    image: 'https://picsum.photos/seed/1/200/300',
  };
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
