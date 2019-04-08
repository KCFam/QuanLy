import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructingComponent } from './constructing/constructing.component';

const routes: Routes = [
  {
    path: "Constructing",
    component: ConstructingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
