import { Component,OnInit } from '@angular/core';
import {PassengerDashboardService} from '../../services/passenger-dashboard.services';
import {Passenger} from '../../models/passenger.interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import  {switchMap} from 'rxjs/operators'
@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.css'],
  templateUrl: 'passenger-viewer.component.html'

})

export class PassengerViewerComponent implements OnInit{

  passenger!: Passenger;
  passengerId!: number;
 constructor(private myService: PassengerDashboardService,
             private router:Router, private route:ActivatedRoute){

 }
  ngOnInit(): void {
    this.route.params.pipe(
    switchMap((data:Params) => {
      this.passengerId = data.id;
     return this.myService.getPassenger(this.passengerId);
    })).subscribe((data:Passenger) => this.passenger=data);

    //this.myService.getPassenger(this.passengerId).
    //subscribe((data:Passenger) => {
    //  this.passenger = data;
    //});
  }

  onUpdatePassenger(event:Passenger){
    this.myService.
    updatePassenger(event).subscribe((data:Passenger)=> {
      this.passenger = Object.assign({},this.passenger,event);
      this.router.navigate(['/passengers']);});

  }
  goBack(){
    this.router.navigate(['/passengers']);
  }
}

