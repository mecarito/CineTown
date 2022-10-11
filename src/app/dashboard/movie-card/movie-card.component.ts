import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  imageUrl!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.movie.poster_path) {
      this.imageUrl = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    }
  }
}
