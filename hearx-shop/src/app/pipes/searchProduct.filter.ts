import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../shared/product.model';
@Pipe({
  name: 'search'
})
export class SearchProductPipe implements PipeTransform {
  transform(products: Product[], searchText: string): any[] {
    if (!products) { return []; }
    if (!searchText) { return products; }
    searchText = searchText.toLowerCase();
    return products.filter(it => {
      // searches product name
      return it.name.toLowerCase().includes(searchText) || it.name.toLowerCase().includes(searchText);
    });
  }
}