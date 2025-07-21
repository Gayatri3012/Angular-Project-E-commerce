import { computed, Injectable, signal } from '@angular/core';

export interface CartItemInterface {
  productId: number | undefined;
  name: string | undefined;
  price: number | undefined;
  quantity: number;
  imageUrl: string | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItemInterface[]>([
      {
        imageUrl: "https://placehold.co/300x300?text=Nord+3",
        name:"OnePlus Nord 3",
        price: 399,
        productId: 4,
        quantity: 4
    },
    {
      imageUrl: "https://placehold.co/300x300?text=Redmi+Note+12",
      name: "Redmi Note 12",
      price: 299,
      productId: 3,
      quantity: 4
    },
    {
      imageUrl: "https://placehold.co/300x300?text=Galaxy+S23",
      name: "Samsung Galaxy S23",
      price: 999,
      productId: 2,
      quantity: 3
    }
  ]);
  
  totalQuantity = computed(() =>
    this.cart().reduce((acc, item) => acc + item.quantity, 0)
  );
  
 
  addToCart(item: CartItemInterface) {
    const currentCart = this.cart();
    const index = currentCart.findIndex(ci => ci.productId === item.productId);

    if (index !== -1) {
      currentCart[index].quantity += item.quantity;
      this.cart.set([...currentCart]);
    } else {
      this.cart.set([...currentCart, item]);
    }
  }

  removeFromCart(productId: number) {
    const updatedCart = this.cart().filter(item => item.productId !== productId);
    this.cart.set(updatedCart);
  }

  clearCart() {
    this.cart.set([]);
  }

  editQuantityOfItem(item:CartItemInterface, quantity:number){
      const currentCart = this.cart();
      const index = currentCart.findIndex(ci => ci.productId === item.productId);

      currentCart[index].quantity += quantity;
      if(currentCart[index].quantity <= 0){
        currentCart.splice(index,1)
          this.cart.set([...currentCart])
      }else {
          this.cart.set([...currentCart]);
      }    
  }

  calculateTotal() {
    return this.cart().reduce((acc, item) => {
      return acc + (item.price ?? 0) * (item.quantity ?? 0);
    }, 0);
  }
}
