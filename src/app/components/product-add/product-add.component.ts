import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    //code: ['',  [Validators.required, Validators.minLength(3)]],
    createdAt: ['', Validators.required],
    price: [0, Validators.required],
    //imageUrl: ['', [Validators.required]],
    description: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        //code: this.productForm.value.code || "",
        createdAt: this.productForm.value.createdAt || '',
        price: this.productForm.value.price || 0,
        //imageUrl: this.productForm.value.imageUrl || "",
        description: this.productForm.value.description || '',
      };
      this.productService.addProduct(product).subscribe((data) => {
        //console.log(data);

        alert("Product added successfully")
        this.router.navigate(['/admin'])
      });
    }
  }
}
