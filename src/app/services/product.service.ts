import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = `http://localhost:3000/products`;

  constructor(private http: HttpClient ) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }

  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.API_URL, product)
  }

  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }

  
}
