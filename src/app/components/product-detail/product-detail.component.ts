import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  products!: IProduct;
  //prodId: any

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
        this.route.params.subscribe(({id}) => {
            this.productService.getProductById(id).subscribe({
                next: (data) => this.products = data
            })
        })
    }
}


