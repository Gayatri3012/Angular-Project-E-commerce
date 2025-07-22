import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, TruckElectric } from 'lucide-angular';
import { CartItemInterface, CartService } from '../../core/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  readonly ChevronRight = ChevronRight;
  readonly Truck = TruckElectric;

    private router = inject(Router);

  userName: string = '';
  address: string = '';
  phoneNumber: string = '';
  payOption: string = 'cash-on-deleivery';

  cart : CartItemInterface[] =  this.cartSrevice.cart();
  total : number = this.cartSrevice.calculateTotal();
  
  constructor(private cartSrevice: CartService){}

  onSubmit(event: Event){
    event.preventDefault();
    if(!this.userName.trim() || !this.address.trim() || !this.phoneNumber.trim() || !this.payOption.trim()) return;
    console.log(this.userName, this.address, this.phoneNumber, this.payOption);
    this.cartSrevice.clearCart();
    this.router.navigate(['/products'])
  }

}
