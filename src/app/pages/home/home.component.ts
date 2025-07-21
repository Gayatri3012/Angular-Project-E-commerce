import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingBag, ShoppingCart, Star, TruckElectric, Wallet } from 'lucide-angular';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 readonly ShoppingBag = ShoppingBag;
 readonly ShoppingCart = ShoppingCart;
 readonly TruckElectric = TruckElectric;
 readonly Wallet = Wallet;
 readonly Star = Star;
}
