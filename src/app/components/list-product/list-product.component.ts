import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

interface Product {
  title: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent {
  productList$: Observable<Product[]
  > = new Observable<Product[]
  >();

  constructor(
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productServiceService.fetchData().pipe(
      map((products: Product[]) => {
        return products.map((product: Product) => {
          return {
            ...product,
            price: product.price * 2,
          };
        });
      }
      )
    );
  }
}
