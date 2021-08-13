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
import {RouterModule,Routes} from'@angular/router';

const routes:Routes =[
  {path:'passengers',
   children:[
     {path:'', component:PassengerDashboardComponent},
     {path:':id', component:PassengerViewerComponent}
   ]}
]


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
        FormsModule,
        RouterModule.forChild(routes)
      ],
      exports:[PassengerDashboardComponent],
      providers:[PassengerDashboardService]
    })

export class PassengerDashboardModule { }
