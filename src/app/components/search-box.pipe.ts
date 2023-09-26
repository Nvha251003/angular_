import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Pipe({
  name: 'searchBox',
})
export class SearchBoxPipe implements PipeTransform {
  transform(products: IProduct[], searchText: string){
    return products.filter((item: any) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase))
  }
}
