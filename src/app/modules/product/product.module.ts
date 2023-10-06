import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { SearchBoxPipe } from 'src/app/components/search-box.pipe';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { adminRoute, productRoute } from 'src/app/routes/product.routes';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

const combineRoutes = [
  ...productRoute,
  ...adminRoute
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    SearchBoxPipe,
    ProductEditComponent,
    ProductAddComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(combineRoutes)
  ]
})
export class ProductModule { }
