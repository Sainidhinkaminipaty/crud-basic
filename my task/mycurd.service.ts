import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class MycurdService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  httpOptions = {

    headers: this.headers

  }




  constructor(private http: HttpClient) { }

  url: string = "/assets/db.json";

  getusers():any {

    return this.http.get<any[]>(this.url);

  }




  deleteUser(id: number): Observable<any> {

    const url = '${this.url}/${id}';

    return this.http.delete<any>(url, this.httpOptions)

  }

  getUpdateUser(id: number): Observable<any> {

    const url = '${this.url}/${id}';

    return this.http.get<any>(url, this.httpOptions)




  }

  UpdateUser(id: number): Observable<any> {

    const url = '${this.url}/${id}';

    return this.http.put<any>(url, this.httpOptions)




  }

}