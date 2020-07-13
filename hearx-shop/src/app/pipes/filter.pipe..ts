import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], name: string): any {
    if (name === 'all') {
      return products;
    } else {
      return products.filter(product => {
        return product.name === name;
      });
    }
  }
}
