import { Component,OnInit } from '@angular/core';
import {Child} from '../../models/passenger.interfaces';
import {Passenger} from '../../models/passenger.interfaces';
import {PassengerDashboardService} from '../../services/passenger-dashboard.services';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  templateUrl: 'passenger-dashboard.component.html'

})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] =[] ;

  constructor(private route:ActivatedRoute,
    private router:Router,private myService:PassengerDashboardService){
  }

  ngOnInit(): void {
    this.getPassengers();
  }

  getPassengers(){
    this.myService.getPassengers().
    subscribe((data:Passenger[]) => {
      console.log(data);
      this.passengers = data.map((p:Passenger) =>{
       return {id: p.id,
         fullname:p.fullname,checkedIn:p.checkedIn,
         checkInDate:p.checkInDate,
         baggage:p.baggage,
         children:p.children};
      });
      console.log(this.passengers);
     },
     (error)=>{
       console.error(error);
     });
  }

  getPassengersPromise(){
    this.myService.getPassengers().toPromise().
    then((data:Passenger[]) => {
      console.log(data);
      this.passengers = data.map((p:Passenger) =>{
       return {id: p.id,
         fullname:p.fullname,checkedIn:p.checkedIn,
         checkInDate:p.checkInDate,
         baggage:p.baggage,
         children:p.children};
      });
      console.log(this.passengers);
     });
  }

  handleRemove(event:Passenger){
    this.myService.
    removePassenger(event).subscribe((data:Passenger)=>  this.getPassengers());
  }
  handleEdit(event:Passenger){
    this.myService.
    updatePassenger(event).subscribe((data:Passenger)=>  this.getPassengersPromise());

  }
  handleView(event:Passenger){
   this.router.navigate(['/passengers', event.id])
  }


}
