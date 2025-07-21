import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/products.service';
import { ProductInterface } from '../../../assets/data';
import { ChevronRight, Heart, LucideAngularModule,ShoppingCart,Star } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  readonly ChevronRight = ChevronRight;
  readonly Heart = Heart;
  readonly ShoppingCart = ShoppingCart;
    private route = inject(ActivatedRoute);
    private productServive = inject(ProductsService);

    productId : number = 0;
    product : ProductInterface | undefined;

      constructor(private cartSrevice: CartService){}

   ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.productId !== undefined)this.product = this.productServive.getProductById(this.productId);
   }

    addProductToCart(){
    let item ={
      productId: this.product?.id,
      name: this.product?.name,
      price: this.product?.price,
      quantity: 1,
      imageUrl: this.product?.imageUrl
    }

    this.cartSrevice.addToCart(item);
  }
}
