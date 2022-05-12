import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
      { path: 'charts', component: Graphics1Component, data: { title: 'Charts'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account Setting'} },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS'} },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
