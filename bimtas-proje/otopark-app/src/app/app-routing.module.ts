import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarparkListComponent } from './pages/carpark-list/carpark-list.component';
import { CarparkMapComponent } from './pages/carpark-map/carpark-map.component';
import { MainComponent } from './pages/main/main.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'autopark-list',
        component: CarparkListComponent,
      },
      {
        path: 'autopark-map',
        component: CarparkMapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
