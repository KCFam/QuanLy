import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstructingComponent } from './constructing/constructing.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: "Constructing",
    component: ConstructingComponent
  },
  { path: 'NewStaff', component: StaffEditComponent },
  { path: 'EditStaff/:ID', component: StaffEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
