import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, TruckElectric } from 'lucide-angular';
import { CartItemInterface, CartService } from '../../core/cart.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  readonly ChevronRight = ChevronRight;
  readonly Truck = TruckElectric;

  private router = inject(Router);

  checkoutForm = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('',[ Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    payOption: new FormControl('cash-on-delivery', Validators.required)
  })


  cart : CartItemInterface[] =  this.cartSrevice.getCart();
  total : number = this.cartSrevice.calculateTotal();
  
  constructor(private cartSrevice: CartService, private toastService: ToastService){}

  onSubmit(event: Event){
    event.preventDefault();

    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched(); 
      return;
    }

    console.log(this.checkoutForm.value);
        this.toastService.show('Order Placed!')
    
    this.cartSrevice.clearCart();

    this.router.navigate(['/products'])
  }

}
