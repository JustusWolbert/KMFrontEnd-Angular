import {  Ticket  } from '../ticket/ticket';
export class Visitor{
  id?: number;
  wallet: number;
  name: string;
  loginName: string;
  password: string;
  ticketList: Ticket[] = [];
}
