import { Component } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { ProductInterface } from '../../../assets/data';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SearchAndFilterComponent } from '../../components/search-and-filter/search-and-filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, SearchAndFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:ProductInterface[] = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.products = this.productsService.getAllProducts();
  }

  onSearch( searchTerm:string){
      this.products =  this.productsService.searchProductByName(searchTerm);
  }

  onFilter(category:string){
    if(category === 'All'){
         this.products = this.productsService.getAllProducts();
    } else {
      this.products =  this.productsService.filterByCategory(category);
      console.log(this.products)
    } 
  }
}
