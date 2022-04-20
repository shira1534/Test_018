import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  search(name: string,category:number,priceId:number) {
    return this.http.get<Product[]>(`${environment.url}/Product/SearchProduct/${name}/${category}/${priceId}`);


  }
}
