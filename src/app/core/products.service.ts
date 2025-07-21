import { Injectable, signal } from '@angular/core';
import { PRODUCTS, ProductInterface } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = signal<ProductInterface[]>(PRODUCTS);


  getAllProducts(){
    return this.products();
  }

  getProductById(id: number){
    return this.products().find(item => item.id === id);
  }

  constructor() { }
}
