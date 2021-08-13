import { Component } from '@angular/core';

interface INav{
  link:string,
  name:string,
  exact:boolean
}
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'

})
export class AppComponent {

  nav:INav[] =[{
    link:'/',
    name:"Home",
    exact:true
  },
  {
    link:'/passengers',
    name:"Passengers",
    exact:true
  }
];


}
