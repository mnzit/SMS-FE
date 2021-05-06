import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {
    path: "user",
    component: SingleUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
