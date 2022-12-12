import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'app-types';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  popularMoviesSub!: Subscription;
  topRatedMoviesSub!: Subscription;
  upComingMoviesSub!: Subscription;
  nowPlayingMoviesSub!: Subscription;
  
  popularMovies!: Movie[];
  topRatedMovies!: Movie[];
  upComingMovies!: Movie[];
  nowPlayingMovies!: Movie[];


  constructor(public movieService: MoviesService) {}

  ngOnInit(): void {
    this.popularMoviesSub = this.movieService.$popular.subscribe((res) => {
      this.popularMovies = res.results;
    });
    this.topRatedMoviesSub = this.movieService.$topRated.subscribe((res) => {
      this.topRatedMovies = res.results;
    });
    this.upComingMoviesSub = this.movieService.$upComing.subscribe((res) => {
      this.upComingMovies = res.results;
    });
    this.nowPlayingMoviesSub = this.movieService.$nowPlaying.subscribe((res) => {
      this.nowPlayingMovies = res.results;
    });
  }

  ngOnDestroy(): void {
    this.popularMoviesSub.unsubscribe();
    this.topRatedMoviesSub.unsubscribe();
    this.upComingMoviesSub.unsubscribe();
    this.nowPlayingMoviesSub.unsubscribe();
  }
}
