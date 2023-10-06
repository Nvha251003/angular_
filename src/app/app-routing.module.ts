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
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { adminRoute, productRoute } from './routes/product.routes';

const routes: Routes = [
  // Web
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: "products", pathMatch: "full" },
      ...productRoute,
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutComponent}
    ],
  },

  // Admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      ...adminRoute
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
