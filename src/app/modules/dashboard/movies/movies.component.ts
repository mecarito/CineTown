import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'app-types';
import { MoviesService } from '../../shared/services/movies.service';
import { saveSelectedMovies } from 'app-store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMoviesSub!: Subscription;
  topRatedMoviesSub!: Subscription;
  upComingMoviesSub!: Subscription;
  nowPlayingMoviesSub!: Subscription;

  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];

  constructor(
    public movieService: MoviesService,
    public store: Store,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.popularMoviesSub = this.movieService.$popular.subscribe((res) => {
      this.popularMovies = res.results.filter((movie) => movie.poster_path);
    });
    this.topRatedMoviesSub = this.movieService.$topRated.subscribe((res) => {
      this.topRatedMovies = res.results.filter((movie) => movie.poster_path);
    });
    this.upComingMoviesSub = this.movieService.$upComing.subscribe((res) => {
      this.upComingMovies = res.results.filter((movie) => movie.poster_path);
    });
    this.nowPlayingMoviesSub = this.movieService.$nowPlaying.subscribe(
      (res) => {
        this.nowPlayingMovies = res.results.filter(
          (movie) => movie.poster_path
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.popularMoviesSub.unsubscribe();
    this.topRatedMoviesSub.unsubscribe();
    this.upComingMoviesSub.unsubscribe();
    this.nowPlayingMoviesSub.unsubscribe();
  }

  saveMovies(movies: Movie[], category: string) {
    this.store.dispatch(saveSelectedMovies({ movies: movies }));
    this.router.navigate(['movies', category]);
  }

  goToMoviePage(movie: Movie) {
    this.router.navigate(['movie'], {
      queryParams: {
        id: movie.id,
      },
    });
  }
}
