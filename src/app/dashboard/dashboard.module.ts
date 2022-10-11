import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [ DashboardComponent, HeaderComponent],
  imports: [ CommonModule, MatSidenavModule,],
  providers: [],
})
export class DashboardModule {}
