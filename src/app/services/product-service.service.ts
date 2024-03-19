import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private baseURL = `https://localhost:7113/api`;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`https://localhost:7113/api/product`);
  }

  postProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/product`, data);
  }

  updateData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/product/${id}`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/product/${id}`);
    
  }
}
