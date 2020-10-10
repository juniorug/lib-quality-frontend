import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CraftBeerService {

  private baseUrl = 'http://localhost:8080/craft-beers';

  constructor(private http: HttpClient) { }

  getCraftBeer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCraftBeer(craftBeer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, craftBeer);
  }

  updateCraftBeer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCraftBeer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCraftBeersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
