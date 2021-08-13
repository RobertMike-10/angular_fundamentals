import { Component, Input, Output, EventEmitter}  from '@angular/core';
import { Passenger } from '../../models/passenger.interfaces';
import { IBaggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.css'],
  template:`
  <form #form="ngForm" novalidate (ngSubmit)="handleSubmit(form.value, form.valid)">
    <div>
      Passenger name:
      <input type="text"
      name="fullname"
      required
      #fullname ="ngModel"
      [ngModel]="detail?.fullname">
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
      Passenger Name is Required
      </div>
     </div>
     <div>
      Passenger ID:
      <input type="number"
      required
      name="id"
      #id ="ngModel"
      [ngModel]="detail?.id">
      <div *ngIf="id.errors?.required && id.dirty" class="error">
       Passenger ID is Required
      </div>
     </div>
     <div>
      <label>
      <input type="radio"
       name="checkedIn"
       [value] = "true"
       [ngModel]="detail?.checkedIn"
       (ngModelChange)="checkIn($event)">
       Yes
       </label>
       <label>
      <input type="radio"
       name="checkedIn"
       [value] = "false"
       [ngModel]="detail?.checkedIn"
       (ngModelChange)="checkIn($event)">
       No
       </label>
     </div>
     <div>
     <label>
      <input type="checkbox"
       name="checkedIn"
       [ngModel]="detail?.checkedIn"
       (ngModelChange)="checkIn($event)">
       CheckedIn
       </label>
     </div>
     <div *ngIf="form.value.checkedIn">
       Check In date:
       <input
        type="number"
        name="checkInDate"
        [ngModel] = "detail?.checkInDate">
      </div>
      <div>
       Lugagge:
      <!-- <select name="baggage"
       [ngModel] = "detail?.baggage">
         <option *ngFor ="let item of baggage"
         [value]="item.key"
         [selected]="item.key === detail?.baggage">
           {{item.value}}
         </option>
       </select> !-->
       <select name="baggage"
       [ngModel] = "detail?.baggage">
         <option *ngFor ="let item of baggage"
         [ngValue]="item.key"
         >
           {{item.value}}
         </option>
       </select>
      </div>

      <!--<div>
       Valid: {{form.valid | json}}
      </div> !-->
      <button type ="submit" [disabled]="form.invalid">
        Update Passenger
       </button>
      <!--<<div>
       Invalid: {{form.invalid | json}}
      </div> !-->
  </form>
  `
})

export class PassengerFormComponent{
  @Input()
  detail!:Passenger;

  @Output()
  update: EventEmitter<Passenger> =  new EventEmitter<Passenger>();

  baggage:IBaggage[] =[{key:'none',value:'No baggage'},
  {key:'hand-only',value:'Hand Baggage'},
  {key:'hold-only',value:'Hold Baggage'},
  {key:'hand-hold',value:'Hand and Hold Baggage'}
   ]
  checkIn(checkedIn:boolean){
    if (checkedIn)
    {
      this.detail.checkInDate = Date.now(); //+new Date()
    }
    else
    {
      this.detail.checkInDate = null;
    }
  }

  handleSubmit(passenger:Passenger, isValid:boolean|null){
    if (isValid)
    {
      this.update.emit(passenger);
    }
  }
}
