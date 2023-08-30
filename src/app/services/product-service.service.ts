import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  title: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchData(): Observable<Product[]> {
    return this.httpClient.get(this.apiUrl) as Observable<Product[]>;
  }
}
