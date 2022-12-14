import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cards, Movie, TvShow } from 'app-types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() variant!: Cards;
  @Input() movie!: Movie;
  @Input() tvShow!: TvShow;
  @Output() movieClickEvent = new EventEmitter<Movie>();
  @Output() tvShowClickEvent = new EventEmitter<TvShow>();

  imageBaseUrl = environment.imageUrl;

  constructor() {}

  ngOnInit(): void {}

  getBgImage() {
    if (this.movie) {
      return `url(${this.imageBaseUrl}${this.movie.poster_path})`;
    }
    return `url(${this.imageBaseUrl}${this.tvShow.poster_path})`;
  }

  getMovie(movie: Movie) {
    this.movieClickEvent.emit(movie);
  }

  getTvShow(tvShow: TvShow) {
    this.tvShowClickEvent.emit(tvShow);
  }
}
