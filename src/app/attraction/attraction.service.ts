import { Injectable } from '@angular/core';
import { Attraction } from './attraction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AttractionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getAttraction(): Observable<Attraction>{
    return this.http.get<Attraction>('http://localhost:8082/stub');
  }
  getAttractionList(): Observable<Attraction[]>{
    return this.http.get<Attraction[]>('http://localhost:8082/attraction/all');
  }
  postAttraction(attr: Attraction): Observable<Attraction>{
    return this.http.post<Attraction>('http://localhost:8082/1/attraction', attr, this.httpOptions);
  }
}
