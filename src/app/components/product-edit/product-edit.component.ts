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
      //code: ['',  [Validators.required, Validators.minLength(3)]],
      createdAt: ['', Validators.required],
      price: [0, Validators.required],
      //imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]]
  })

  

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(({ id }) => {
      
      this.productService.getProductById(id).subscribe({
        next: (data:any) => {
          this.product = data.data
          //console.log(this.product);
          
          this.productForm.patchValue(this.product as any)
        }
      })
    })
  }

  onHandleEdit() {
    // đoạn ni k đc để _id trước .. this.productService...vì để trước hắn k overriding lại đc data mới truyền vô
    
    const product = {
      ...this.productForm.value,
      _id: this.product._id,
    }
    this.productService.updateProduct(product as IProduct).subscribe({
      next: () => {
        alert('Product updated successfully')
        this.router.navigate(['/admin'])
      }
    })
  }
}
