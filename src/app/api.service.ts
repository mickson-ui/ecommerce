import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/Ecommerce';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetAllProducts`);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetProductById/${id}`);
  }
  getAllOffers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetAllOffers`);
  }
  loginUser(UserName: string, UserPassword: string): Observable<any>{
    const loginData = {UserName, UserPassword}
    return this.http.post<any>(`${this.apiUrl}/Login`, loginData);
  }

}
