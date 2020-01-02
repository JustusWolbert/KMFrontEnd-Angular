export class Event{
  id?: number;
  eventName: string;
  location: string;
  venue: string;
  dateAndTime: string;
  description: string;
  amountTicket: number;
  priceTicket: number;
  eventSales: number;
  lockerAvailable: boolean;
  consumptionAvailable: boolean;
  priceLocker: number;
  priceConsumption: number;
}
