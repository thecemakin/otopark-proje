import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarparkListComponent } from './pages/carpark-list/carpark-list.component';
import { CarparkMapComponent } from './pages/carpark-map/carpark-map.component';
import { MainComponent } from './pages/main/main.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarparkDetailsModalComponent } from './shared/modals/carpark-details-modal/carpark-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,

    CarparkListComponent,
    CarparkMapComponent,
    MainComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ServicesComponent,
    CarparkDetailsModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
