import {Passenger} from '../models/passenger.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
const PASSENGER_API:string='/api/passengers/';
@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService{
  constructor(private http: HttpClient){

  }

  getPassengers():Passenger[]{
   return [{
    id: 1,
    fullname: "Esmeralda",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{ name: "Erika", age: 12 }, { name: "Yatziry", age: 8 }]
  }, {
    id: 2,
    fullname: "Zabdiel",
    checkedIn: false,
    checkInDate: null,
    children: null
  }, {
    id: 3,
    fullname: "Miguel",
    checkedIn: true,
    checkInDate: 1491606000000,
    children: [{ name: "Zabdiel", age: 1 }]
  }, {
    id: 4,
    fullname: "Beatriz",
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: "Miguel", age: 1 }]
  }, {
    id: 5,
    fullname: "Arely",
    checkedIn: false,
    checkInDate: null,
    children: null
  }];

  }
}
