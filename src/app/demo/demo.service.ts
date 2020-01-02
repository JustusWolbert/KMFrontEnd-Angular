import { Injectable } from '@angular/core';
import { Event } from '../event/event';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';

@Injectable()
export class EventService{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



constructor(private http: HttpClient) { }

getEvent(): Observable<Event>{
  return this.http.get<Event>('http://localhost:8082/event/Feestteam');
}

getEventList(): Observable<Event[]>{
  return this.http.get<Event[]>('http://localhost:8082/Jo Hoode/allEvents');
}
}
