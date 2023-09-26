import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      //{ path: '', component: ProductListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/detail/:id', component: ProductDetailComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
      { path: 'edit/:id', component: ProductEditComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
