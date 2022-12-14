import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCategoryMovies } from 'app-store';
import { Movie } from 'app-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  movies: Movie[] = [];

  constructor(public store: Store, public router: Router) {}

  ngOnInit(): void {
    this.storeSub = this.store
      .select(selectCategoryMovies as any)
      .subscribe((movies: any) => (this.movies = movies));
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  goToMoviePage(movie: Movie) {
    this.router.navigate(['movie'], {
      queryParams: {
        id: movie.id,
      },
    });
  }
}
