import { Component } from '@angular/core';
import { Event } from '../event/event';
import { EventService } from './demo.service';

@Component({
  selector: 'demo',
  styleUrls: ['./demo.component.css'],
  templateUrl: './demo.component.html',
  providers: [EventService]
})

export class DemoComponent {
  eventList: Event[] = []

  constructor(private eventService: EventService){
    this.eventService.getEventList().subscribe(ab => this.eventList = ab);
  }


}
