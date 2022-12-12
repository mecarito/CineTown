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
  @Output() clickEvent = new EventEmitter<string>();
  imageBaseUrl = environment.imageUrl;

  url = 'https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg';

  constructor() {}

  ngOnInit(): void {}

  getBgImage() {
    return `url(${this.imageBaseUrl}${this.movie.poster_path})`;
  }

  getItemId() {
    this.clickEvent.emit();
  }
}
