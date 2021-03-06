import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children:Child[] | null
}

@Component({
  selector: 'app-root', 
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
   
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Esmeralda',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{ name: 'Erika', age: 12 }, { name: 'Yatziry', age: 8 }]
  }, {
    id: 2,
    fullname: 'Zabdiel',
    checkedIn: false,
    checkInDate: null,
    children: null
  }, {
    id: 3,
    fullname: 'Miguel',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: [{ name: 'Zabdiel', age: 1 }]
  }, {
    id: 4,
    fullname: 'Beatriz',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Miguel', age: 1 }]
  }, {
    id: 5,
    fullname: 'Arely',
    checkedIn: false,
    checkInDate: null,    
    children: null
  }];
}