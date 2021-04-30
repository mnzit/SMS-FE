import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ManageComponent } from './components/manage/manage.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewComponent,
    ManageComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewComponent,
    ManageComponent,
    DetailComponent
  ]
})
export class UsersModule { }
