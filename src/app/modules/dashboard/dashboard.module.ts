import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: SearchComponent  },
      { path: 'search', redirectTo: '', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'tvShows', component: TvShowsComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    MoviesComponent,
    TvShowsComponent,
    CategoriesComponent,
    SearchComponent,
  ],
  providers: [],
})
export class DashboardModule {}
