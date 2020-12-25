import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';


export interface User  {
  first_name : string,
  last_name : string,
  email : string,
  password : string,
  address : string
}

export interface Credentials {
  email : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, public urlservice : UrlService) { }

  add_user(data : User): Observable<User[]> {
    return this.http.post<User[]> (`${this.urlservice.url}users`, data) 
  }

  login_user(cred : Credentials): Observable<User[]> {
    return this.http.post<User[]> (`${this.urlservice.url}login`, cred)    
  }
}
