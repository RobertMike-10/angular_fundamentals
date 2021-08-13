import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  styleUrls: ['not-found.component.css'],
  template: `
  <div>
   Not Found, <a routerLink="/">Go Home</a> ?
 </div>
   `
})
export class NotFoundComponent {

}
