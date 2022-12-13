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
import { CategoryComponent } from './movies/category/category.component';
import { TvCategoryComponent } from './tv-shows/tv-category/tv-category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'search', redirectTo: '', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'movies/:category', component: CategoryComponent },
      { path: 'tvShows', component: TvShowsComponent },
      { path: 'tvShows/:category', component: TvCategoryComponent },
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
    CategoryComponent,
    TvCategoryComponent,
  ],
  providers: [],
})
export class DashboardModule {}
