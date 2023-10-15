import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  searchText: string = '';
  products: IProduct[] = [];

  constructor(
    private productService: ProductService, 
    private router: Router
    ) {
      this.productService.getAll().subscribe({
        next: (data: any) => {
          
          this.products = data.data;
          //console.log(data);
          
          
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
    
  removeProduct(id: any) {
    //console.log(id);
    
    const confirm = window.confirm(
      'Are you sure you want to remove this product?'
    );
    if (confirm) {
      this.productService.deleteProduct(id).subscribe({
        next: (data) => {
          //console.log(data);
          
          alert('Product is deleted');
          this.products = this.products.filter((item) => item._id != id);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
      //this.products = this.products.filter((item) => item.id != id);
    }
  }

  //   onHandleRemove(id: any) {
  //     console.log(id);
  //   }
}
