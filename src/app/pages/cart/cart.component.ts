import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartItemInterface, CartService } from '../../core/cart.service';
import { CircleMinus, CirclePlus, LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  readonly CirclePlus = CirclePlus;
  readonly CircleMinus = CircleMinus;
  readonly Trash = Trash2;
  
  cart : CartItemInterface[] =  this.cartSrevice.cart();
  total : number = this.cartSrevice.calculateTotal();
  
  constructor(private cartSrevice: CartService){}

  IncreaseQuantity(item: CartItemInterface){
    this.cartSrevice.editQuantityOfItem(item, 1);
    this.cart = this.cartSrevice.cart();
    this.total = this.cartSrevice.calculateTotal();
  }

  DecreaseQuantity(item: CartItemInterface){
    this.cartSrevice.editQuantityOfItem(item, -1);
    this.cart = this.cartSrevice.cart();
    this.total = this.cartSrevice.calculateTotal();
  }

  removeItem(productId: number){
    this.cartSrevice.removeFromCart(productId);
    this.cart = this.cartSrevice.cart();
    this.total = this.cartSrevice.calculateTotal();
  }

}
