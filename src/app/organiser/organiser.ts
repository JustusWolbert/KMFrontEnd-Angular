import {  Attraction  } from '../attraction/attraction';
export class Organiser{
  id?: number;
  name: string;
  loginName: string;
  password: string;
  attractionList: Attraction[] = [];
}
