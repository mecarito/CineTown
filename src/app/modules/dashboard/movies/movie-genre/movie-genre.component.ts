import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'app-types';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/modules/shared/services/movies.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.css'],
})
export class MovieGenreComponent implements OnInit {
  movieSub!: Subscription;

  genreName!: string | null;
  genreId!: string | null;
  movies: Movie[] = [];
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(
    public route: ActivatedRoute,
    public movieService: MoviesService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.genreName = this.route.snapshot.paramMap.get('genre');
    this.genreId = this.route.snapshot.queryParamMap.get('id');
    if (this.genreId) {
      this.movieSub = this.movieService
        .getGenreMovies(this.genreId)
        .subscribe((movies) => {
          this.movies = movies.results;
        });
    }
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }

  goToMoviePage(movie: Movie) {
    this.router.navigate(['movie'], {
      queryParams: {
        id: movie.id,
      },
    });
  }
}
