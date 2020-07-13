import { TotalCartProduct } from '../../shared/total-cart-product.model';

export class Cart {

    totalCartProduct: TotalCartProduct[];
    totalProducts: number;
    totalPrice: number;

    constructor(totalCartProduct: TotalCartProduct[], totalProducts: number, totalPrice: number) {
        this.totalCartProduct = totalCartProduct;
        this.totalProducts = totalProducts;
        this.totalPrice = totalPrice;
    }
}
