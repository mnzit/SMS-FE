import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToastrModule.forRoot()
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
