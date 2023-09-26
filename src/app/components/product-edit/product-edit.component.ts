import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    name: [''],
      code: [''],
      releaseDate: [''],
      price: [0],
      imageUrl: [''],
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      console.log(id);
      
    })
  }

  onHandleEdit() {
    console.log('bac');
    
  }
}
