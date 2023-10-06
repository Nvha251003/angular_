import { ProductAddComponent } from '../components/product-add/product-add.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductsComponent } from '../components/products/products.component';

export const productRoute = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
];

export const adminRoute = [
  { path: 'product', component: ProductsComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
];
