import { Component } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { ProductInterface } from '../../../assets/data';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:ProductInterface[] = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.products = this.productsService.getAllProducts();
  }
}
