import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//components
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

import {PassengerDashboardService} from './services/passenger-dashboard.services';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailsComponent,
        PassengerCountComponent,
        PassengerViewerComponent,
        PassengerFormComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
      ],
      exports:[PassengerDashboardComponent],
      providers:[PassengerDashboardService]
    })

export class PassengerDashboardModule { }
