import {  Event } from '../event/event';
export class Attraction{
  id?: number;
  attractionName: string;
  artistName: string;
  category: string;
  description: string;
  eventList: Event[] = [];
}
