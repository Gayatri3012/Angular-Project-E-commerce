import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  readonly cartItemCount = this.cartService.totalQuantity;
  constructor(private cartService: CartService){}
}
