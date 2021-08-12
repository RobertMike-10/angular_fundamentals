import { Component,OnInit } from '@angular/core';
import {Child} from '../../models/passenger.interfaces';
import {Passenger} from '../../models/passenger.interfaces';
import {PassengerDashboardService} from '../../services/passenger-dashboard.services';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  templateUrl: 'passenger-dashboard.component.html'

})
export class PassengerDashboardComponent implements OnInit {
  passengers!: Passenger[] ;

  constructor(private myService:PassengerDashboardService){

  }

  ngOnInit(): void {
    console.log('ngOnInit');
   this.passengers= this.myService.getPassengers();
   console.log(this.passengers);
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
