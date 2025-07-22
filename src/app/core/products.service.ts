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

  searchProductByName(searchTerm:string){
    return this.products().filter(product =>{
      return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  filterByCategory(category:string){
    return this.products().filter(product =>{
      return product.category == category;
    })
  }

  constructor() { }
}
