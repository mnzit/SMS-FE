import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ManageComponent } from './components/manage/manage.component';
import { ViewComponent } from './components/view/view.component';
const routes: Routes = [
  {
    path: "",
    component: ViewComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "update/:id",
    component: ManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
