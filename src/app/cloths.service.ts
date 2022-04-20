import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/models/Photo';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ClothsService {

  constructor(private http: HttpClient) { }
  // selectProduct:Product=new Product();
  // setProduct(myProduct:Product){
  //   this.selectProduct=myProduct;
  // }
  // getProduct():Product{
  //   return this.selectProduct;
  // }

  addProduct(z: Product) {

    return this.http.post<Product>(environment.url + "/Product/AddProduct", z);
  }
  AddPhotos(p:Photo[]){

    return this.http.post<Photo[]>(environment.url + "/Photo/AddPhotos", p);

  }
  edit(u: Product) {

    return this.http.put<Product>(environment.url + "/Product/Edit", u);
  }
  GetAllProduct(){

    return this.http.get<Product[]>(environment.url + "/Product/GetAllProduct");

  }
  // GetAllname(){return ""}
  // GetAllcategory(){return ""}
  
  GetproductById(id?:number){

    return this.http.get<Product>(environment.url + "/Product/GetProductById/"+id);

  }
}
