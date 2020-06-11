import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //children: [
    // { path: '', redirectTo: 'dashboard' },
    // {
    //   path: 'dashboard',
    //   loadChildren:
    //     './dashboard/dashboard-master.module#DashboardMasterModule',
    // },
    //],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
