import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.services';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: any  

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((movies) => {
      if (movies) {
       this.trendingMovies = movies
      }      
    });
  }

}
