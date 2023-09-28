import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  // @Input() products!: IProduct[]
  // @Output() onRemove = new EventEmitter();
  // onClick(id: any){
  //   this.onRemove.emit(id)
  // }

  product!: IProduct
  productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      code: ['',  [Validators.required, Validators.minLength(3)]],
      releaseDate: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', [Validators.required]],
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(({ id }) => {
      this.productService.getProductById(id).subscribe({
        next: (data: IProduct) => {
          this.product = data
          this.productForm.patchValue(this.product as any)
        }
      })
    })
  }

  onHandleEdit() {
    const product = {
      id: this.product.id,
      ...this.productForm.value
    }
    this.productService.updateProduct(product as IProduct).subscribe({
      next: () => {
        alert('Product updated successfully')
        this.router.navigate(['/admin'])
      }
    })
  }
}
