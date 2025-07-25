import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent ,
        title: 'Home'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products'
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
        children: [
            { 
                path: 'checkout', 
                component: CheckoutComponent,
                title: 'Checkout' 
            },
        ],
    },
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
];
