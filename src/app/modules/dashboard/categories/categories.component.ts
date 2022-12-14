import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from 'app-types';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  movieCategoriesSub!: Subscription;
  tvShowCategoriesSub!: Subscription;

  movieCategories!: Category[];
  tvShowCategories!: Category[];

  constructor(public categories: CategoriesService, public router: Router) {}

  ngOnInit(): void {
    this.movieCategoriesSub = this.categories.$movies.subscribe((res) => {
      this.movieCategories = res.genres;
    });
    this.tvShowCategoriesSub = this.categories.$tvShows.subscribe((res) => {
      this.tvShowCategories = res.genres;
    });
  }

  ngOnDestroy(): void {
    this.movieCategoriesSub.unsubscribe();
    this.tvShowCategoriesSub.unsubscribe();
  }

  goToMovieGenrePage(genre: Category) {
    this.router.navigate(['movies', 'genre', genre.name], {
      queryParams: { id: genre.id },
    });
  }

  goToTvShowGenrePage(genre: Category) {
    this.router.navigate(['tvShows', 'genre', genre.name], {
      queryParams: { id: genre.id },
    });
  }
}
