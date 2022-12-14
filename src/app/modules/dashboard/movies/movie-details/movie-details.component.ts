import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'app-types';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieSub!: Subscription;

  movieId!: string | null;
  movie!: Movie;
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(
    public route: ActivatedRoute,
    public movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.queryParamMap.get('id');
    if (this.movieId) {
      this.movieSub = this.movieService
        .getMovie(this.movieId)
        .subscribe((movie) => {
          this.movie = movie
        });
    }
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }
}
