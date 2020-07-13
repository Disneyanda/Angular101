import { Component, OnInit } from '@angular/core';

import { CartService } from './shared/cart.service';
import { Cart } from './shared/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
    this.getCart();
  }

  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.cart = cart);
  }

  increaseProductQuantity(productId: number): void {
    this.cartService.updateProductQuantity(productId, '+')
      .subscribe(cart => this.cart = cart);
  }

  decreaseProductQuantity(productId: number): void {
    this.cartService.updateProductQuantity(productId, '-')
      .subscribe(cart => this.cart = cart);
  }

  closeCartPanel(): void {
    const shoppingCartPanel = document.getElementById('cart-panel');
    shoppingCartPanel.style.display = 'none';
  }

}
