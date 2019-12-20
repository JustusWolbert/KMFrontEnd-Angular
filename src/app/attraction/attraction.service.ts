import { Injectable } from '@angular/core';
import { Attraction } from './attraction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AttractionService {
  constructor(private http: HttpClient) { }

  getAttraction(): Observable<Attraction>{
    return this.http.get<Attraction>('http://localhost:8082/stub');
  }
  getAttractionList(): Observable<Attraction[]>{
    return this.http.get<Attraction[]>('http://localhost:8082/stub');
  }
}
