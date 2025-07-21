import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent 
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
        children: [
            { 
                path: 'checkout', 
                component: CheckoutComponent 
            },
        ],
    },
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
];
