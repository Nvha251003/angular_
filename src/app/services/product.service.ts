import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { data } from 'autoprefixer';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = `http://localhost:8080/api/products`;

  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL, product);
  }

  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    // destructuring cungf với rest ( lấy phần còn lại ) ???
    const { _id, ...data } = product;

// còn ...data trước _id là lỗi vì chưa lấy thằng nào ra hết mà lấy phần còn lại nên lỗi do k bt phần còn lại là gồm thằng mô


    // đoạn ni destracturing là :{} hiểu chưa
    // ...data là toán tử rest parameters là lấy các phần tử còn lại của object.
    // bên lõ network error báo về k đc cho id vô body tất cả data gửi lên là nằm trong payload trên đay ê
    // vì trên server node validate k cho gửi _id trong body nên loại bỏ nó khỏi body ???
    // tức là trên node server data gửi lên trong body m đay chek k có trường id trong body nếu có nó báo lỗi k cho id đc để trong body
    return this.http.put<IProduct>(`${this.API_URL}/${_id}`, data);
  }
}
