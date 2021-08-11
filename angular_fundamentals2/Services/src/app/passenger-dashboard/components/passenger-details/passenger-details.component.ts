import { Component,Input,Output,EventEmitter,OnChanges, SimpleChanges,OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interfaces';

@Component({
  selector: 'passenger-details',
  styleUrls: ['passenger-details.component.css'],
  template:  `
  <li>
  <div>
  <br/>
    <span class="status"
      [class.checked-in]="detail.checkedIn">
    </span>
    <div *ngIf="editing">
      <input type="text"
      [value] = "detail.fullname"
      (input)="onNameChange(name.value)"
      #name >
    </div>
    <div *ngIf="!editing">
     {{ detail.fullname }}
     </div>
        <div class="date">
      Check in Date:
      {{detail.checkedIn? (detail.checkInDate | date:'y MMMM d') : 'Not checked In'}}
        </div>
     <br/>
     <div class="children">
       Children:{{detail.children?.length || 0}}
       <div *ngIf="detail.children != null">
       <ul>
         <li *ngFor="let child of detail.children; let i = index;">
           {{ i }}: {{ child.name }} has {{child.age}} years old
         </ul>
       </div>
     </div>

     <button (click)="editPassenger()" style="background:#39B0B9;">
       {{editing? 'Done' : 'Edit'}}
     </button>
     <button (click)="removePassenger()" style="margin-left:5px;background:#B93E39;">
       Remove
     </button>
  </div>
  </li>
`
})

export class PassengerDetailsComponent implements OnChanges,OnInit{
  @Input()
  detail! :Passenger;
  editing:boolean =false;
  @Output()
  remove: EventEmitter<any>=new EventEmitter();
  @Output()
  edit: EventEmitter<any>=new EventEmitter();
  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    if (changes.detail)
    {
      this.detail = Object.assign({},changes.detail.currentValue)
    }
  }
  ngOnInit(){
    console.log('ngOninit');
  }

  onNameChange(value:string){
    //console.log(value);
    this.detail.fullname = value;
  }
  editPassenger(){
    if (this.editing)
    {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  removePassenger(){
    this.remove.emit(this.detail);
  }
}
