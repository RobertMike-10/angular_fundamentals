import { Component,OnInit } from '@angular/core';
import {Child} from '../../models/passenger.interfaces';
import {Passenger} from '../../models/passenger.interfaces';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  templateUrl: 'passenger-dashboard.component.html'

})
export class PassengerDashboardComponent implements OnInit {
  passengers!: Passenger[] ;

  constructor(){}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.passengers=  [{
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

  handleRemove(event:Passenger){
    this.passengers = this.passengers.filter((p:Passenger) => event.id != p.id);
  }
  handleEdit(event:Passenger){
    this.passengers = this.passengers.map((p:Passenger) => {
      if(p.id === event.id){
        p = Object.assign({},p,event);
      }
      return p;
    });
    console.log(this.passengers);
  }
}
