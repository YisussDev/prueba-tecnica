import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { historyProduct } from '../interfaces/products/historyProduct.model';
import { Product } from '../interfaces/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any> {
    return this.http.get("https://pruebatecnica-46014-default-rtdb.firebaseio.com/data.json/")
  }
  sellProducts(product: Product[]):Observable<any> {
    return this.http.put("https://pruebatecnica-46014-default-rtdb.firebaseio.com/data.json", product)
  }
  provideProducts(product: Product[]):Observable<any> {
    return this.http.put("https://pruebatecnica-46014-default-rtdb.firebaseio.com/data.json", product)
  }

  getHistoryProducts():Observable<any> {
    return this.http.get("https://pruebatecnica-46014-default-rtdb.firebaseio.com/history.json/")
  }

  addRegisterProducts(history: historyProduct[]):Observable<any> {
    return this.http.put("https://pruebatecnica-46014-default-rtdb.firebaseio.com/history.json/", history)
  }

}
