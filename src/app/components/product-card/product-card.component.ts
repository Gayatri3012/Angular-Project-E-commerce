import { Component, inject, input } from '@angular/core';
import { ProductInterface } from '../../../assets/data';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { Router } from '@angular/router';
import { CartService } from '../../core/cart.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  readonly ShoppingCart = ShoppingCart;
  product = input<ProductInterface>();

  constructor(private cartSrevice: CartService){}
    
  private router = inject(Router);
  
  goToDetails() {
    this.router.navigate(['/products/', this.product()?.id]);
  }  

  addProductToCart(event:Event){
    event.stopPropagation();
    let item ={
      productId: this.product()?.id,
      name: this.product()?.name,
      price: this.product()?.price,
      quantity: 1,
      imageUrl: this.product()?.imageUrl
    }

    this.cartSrevice.addToCart(item);
  }
}
