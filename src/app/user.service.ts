import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSignIn:boolean=false;
  userName:string="אורח";
  constructor(private http: HttpClient) { }
  logIn(u: User) {

    return this.http.post<User>(environment.url + "/User/login", u);
  }
  Register(u: User) {

    return this.http.post<User>(environment.url + "/User/Register", u);
  }


  
}
