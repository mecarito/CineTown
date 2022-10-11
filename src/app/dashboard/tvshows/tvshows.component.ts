import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.services';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  tvShows: any


  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTvshows().subscribe((shows) => {
      if (shows) {
       this.tvShows = shows
      }      
    });
  }

}
