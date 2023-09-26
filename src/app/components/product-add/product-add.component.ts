import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from 'autoprefixer';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  productForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      code: [''],
      releaseDate: [''],
      price: [0],
      imageUrl: [''],
    });
  }

  onHandleSubmit(){
    if (this.productForm.valid) {
        const product: IProduct = {
            name: this.productForm.value.name || "",
            code: this.productForm.value.code || "",
            releaseDate: this.productForm.value.releaseDate || "",
            price: this.productForm.value.price || 0,
            imageUrl: this.productForm.value.imageUrl || ""
        }
        this.productService.addProduct(product).subscribe(data => { console.log(data) })
    }
  }
}
