import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SearchBoxPipe } from './components/search-box.pipe';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ManageProductComponent,
    LayoutAdminComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
