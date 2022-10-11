import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [ DashboardComponent, HeaderComponent, CategoriesComponent, MovieCardComponent],
  imports: [ CommonModule, MatSidenavModule,MatCheckboxModule, MatDividerModule],
  providers: [],
})
export class DashboardModule {}
