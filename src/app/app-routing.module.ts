import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard').then((module)=> module.DashboardModule)
      },
      {
        path: "users",
        loadChildren: () => import('./users').then((module) => module.UsersModule)
      },
      {
        path: "attendance-history",
        loadChildren: () => import('./attendance').then((module) => module.AttendanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
