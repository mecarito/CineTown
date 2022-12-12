import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../shared/services/search.service';
import { Movie, TvShow } from 'app-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  moviesSub!: Subscription;
  tvShowSub!: Subscription;

  searchTerm!: string;
  movies: Movie[] = []
  tvShows: TvShow[] = []

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.moviesSub = this.searchService.movieSearchResults$.subscribe((res) => {
      this.movies = res.results.filter( movie => movie.poster_path)
    });
    this.tvShowSub = this.searchService.tvShowSearchResults$.subscribe(
      (res) => {
        this.tvShows = res.results.filter( tvshow => tvshow.poster_path)
      }
    );
  }

  ngOnDestroy(): void {
    this.moviesSub.unsubscribe();
    this.tvShowSub.unsubscribe();
  }
  search(search: string) {
    this.searchTerm = search;
    if (search) {
      this.searchService.setSearchTerm(search);
    }
  }
}
