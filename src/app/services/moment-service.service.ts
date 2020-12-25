import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class MomentServiceService {

  constructor(private http: HttpClient, public urlservice : UrlService) { }

  add_moment(data : any): Observable<any[]> {
    return this.http.post<any[]> (`${this.urlservice.url}moments`, data) 
  }

  getall_moment(): Observable<any> {
    return this.http.get<any[]> (`${this.urlservice.url}moments`) 
  }

  update_moment(data : any, id): Observable<any[]> {
    return this.http.patch<any[]> (`${this.urlservice.url}moments/${id}`, data) 
  }

  delete_moment(id) : Observable<any>{
    return this.http.delete<any>(`${this.urlservice.url}moments/${id}`)
  }

}
