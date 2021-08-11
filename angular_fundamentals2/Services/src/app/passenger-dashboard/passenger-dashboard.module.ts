import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailsComponent,
        PassengerCountComponent
      ],
      imports: [
        CommonModule
      ],
      exports:[PassengerDashboardComponent]
    })

export class PassengerDashboardModule { }
