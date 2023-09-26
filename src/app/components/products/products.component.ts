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
      next: (data) => {
        this.products = data;
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
    const confirm = window.confirm(
      'Are you sure you want to remove this product?'
    );
    if (confirm) {
        this.productService.deleteProduct(id).subscribe({
            next: (data) => {
                //this.products = data,
                alert('Product is deleted')
                this.router.navigate(['/admin']);
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete');   
            }
        })
      //this.products = this.products.filter((item) => item.id != id);
    }
  }

//   onHandleRemove(id: any) {
//     console.log(id);
//   }
}
