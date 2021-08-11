import { Component,Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interfaces';
@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.css'],
  template:  `
  <div>
  <h5> We have {{items.length}} passengers </h5>
  <div>
     Checked in: {{checkedInCount()}} / {{items.length}}
  </div>
  <div>
     Not checked in: {{checkedOutCount()}} / {{items.length}}
  </div>
  </div>
`
})

export class PassengerCountComponent{
  @Input()
  items! :Passenger[];
  constructor(){}

  checkedInCount():number{
    if(!this.items) return 0;
    return this.items.filter((p:Passenger) => p.checkedIn).length;
  }

  checkedOutCount():number{
    if(!this.items) return 0;
    return this.items.filter((p:Passenger) => !p.checkedIn).length;
  }
}
