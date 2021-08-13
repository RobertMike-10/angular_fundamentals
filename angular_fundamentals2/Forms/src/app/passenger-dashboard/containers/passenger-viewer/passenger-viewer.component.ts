import { Component,OnInit } from '@angular/core';
import {PassengerDashboardService} from '../../services/passenger-dashboard.services';
import {Passenger} from '../../models/passenger.interfaces';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.css'],
  templateUrl: 'passenger-viewer.component.html'

})

export class PassengerViewerComponent implements OnInit{

  passenger!: Passenger;
  passengerId: number=1;
 constructor(private myService: PassengerDashboardService){

 }
  ngOnInit(): void {
   this.myService.getPassenger(this.passengerId).
   subscribe((data:Passenger) => {
     this.passenger = data;
   });
  }

  onUpdatePassenger(event:Passenger){
    this.myService.
    updatePassenger(event).subscribe((data:Passenger)=> this.passenger = Object.assign({},this.passenger,event));

  }
}

