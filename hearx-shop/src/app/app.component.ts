import { Component, OnInit } from '@angular/core';

import { CartService } from './cart/shared/cart.service';
import { TotalCartProduct } from './shared/total-cart-product.model'; 
import { Product } from './shared/product.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hearx-shop';

  totalCartProduct: TotalCartProduct[] = [];
    product: Product; 
    id: number;
    quantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.cartService.getAllProducts()
      .subscribe(totalCartProduct => this.totalCartProduct = totalCartProduct);
  }

  increaseProductQuantity(productId: number): void {
    this.cartService.updateProductQuantity(productId, '+')
      .subscribe(cart => this.totalCartProduct = cart.totalCartProduct);
  }

  openCartPanel(): void {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.style.display = 'block';
  }

  /*editProductRequired(productId: number) {

  }

  actionRequiredForItem(product: Product): boolean {
    if (this.product.name === this.totalCartProduct.product && this.totalCartProduct.quantity === 0 ) {
      return true;
    }

}*/
}