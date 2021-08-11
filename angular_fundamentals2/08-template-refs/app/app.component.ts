import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      
      <input type="text"
       [value] ="name"
       (input) = "handleChange($event.target.value)">
       
       <template [ngIf]="name.length>2">   
       <div>    
        Searching for ...{{ name }}
        </div> 
       </template>
       <div *ngIf="name.length>0"> 
       Searching for ...{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Mike';
  handleClick(value: string) {
    console.log(value);
    this.name=value;
  }

  handleChange(value: string) {
    console.log(value);
    this.name=value;
  }
}