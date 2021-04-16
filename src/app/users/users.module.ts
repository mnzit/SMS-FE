import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ManageComponent } from './components/manage/manage.component';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    ViewComponent,
    ManageComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersModule]
})
export class UsersModule { }
