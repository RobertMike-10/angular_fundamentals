import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      Hello!
      {{title}}
    </div>
    <h1 [innerHTML]="title"></h1>
    <div>
      {{numberOne}}
      {{numberTwo}}
      The total is: {{numberOne+numberTwo}}
    </div>
    <div>
    {{isHappy?':)':':('}}
    </div>
    <img [src]="logo">
    <button (click)="handleClick()">
    Change Name
    </button>
    <input 
    type="text" 
    [value]="name"
    (input)="handleInput($event)"
    (blur)="handleBlur($event)">
    <input 
    type="text" 
    [(ngModel)] ="name"    
    >
    <input 
    type="text" 
    [ngModel] ="name"
    (ngModelChange)="handleChange($event)"
    >
    <div>{{name}} </div>
  `
})
export class AppComponent {
  title:string = 'Mike';
  groceries:string[];
  numberOne:number=1;
  numberTwo:number=2;
  isHappy:boolean=true;
  logo:string='img/logo.svg';
  name:string ='Mike';
  constructor(){
    this.title= 'Angular';
  }

  handleClick(){
    this.name = "Zabdiel";   
  }

  handleChange(value:string){
    this.name = value;
    console.log(value);
  }

  handleInput(event:any){
    this.name = event.target.value;
    console.log(event);
  }

  handleBlur(event:any){
    this.name = event.target.value;
    console.log(event);
  }
}
