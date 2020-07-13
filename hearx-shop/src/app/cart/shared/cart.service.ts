import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TotalCartProduct } from '../../shared/total-cart-product.model';
import { Cart } from './cart.model';
import { InitialProducts } from '../../shared/initial-product.model';
import { MatCardActions } from '@angular/material/card';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;
  
  constructor() {
    this.cart = new Cart([], 0, 0);

    InitialProducts.forEach(product => 
      this.cart.totalCartProduct
      .push({ product: product, quantity: 0, subtotalPrice: 0 })
    );
  }

  getCart(): Observable<Cart> {
    return of(this.cart);
    // console.log(this.cart);
  }

  getAllProducts(): Observable<TotalCartProduct[]> {
    return of(this.cart.totalCartProduct);
  }

  updateProductQuantity(productId: number, operation: string): Observable<Cart> {
    const index = this.cart.totalCartProduct.findIndex(c => c.product.id == productId);

    if (index !== -1) {
      if (operation === '+')
        this.cart.totalCartProduct[index].quantity++;
      else if (operation === '-')
        this.cart.totalCartProduct[index].quantity--;

      this.cart.totalCartProduct[index].subtotalPrice = this.calculateSubtotalPrice(index);
      this.cart.totalPrice = this.calculateCartTotalPrice();
      this.cart.totalProducts = this.calculateCartTotalItems();
    }
    
    return of(this.cart);
  }

  private calculateSubtotalPrice(cartItemIndex: number): number {
    const cartProduct = this.cart.totalCartProduct[cartItemIndex];
    return cartProduct.quantity * cartProduct.product.price;
  }

  private calculateCartTotalPrice(): number {
    return (
      this.cart.totalCartProduct
      .reduce((total, current) => total + current.subtotalPrice, 0)
    );
  }

  private calculateCartTotalItems(): number {
    return (
      this.cart.totalCartProduct
      .reduce((total, current) => total + current.quantity, 0)
    );
  }
}
