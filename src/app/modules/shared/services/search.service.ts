import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieQueryResponse, TvShowQueryResponse } from 'app-types';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = environment.baseUrl;
  private movieSearchUrl = `${this.baseUrl}/search/movie`;
  private tvShowSearchUrl = `${this.baseUrl}/search/tv`;

  private searchSubject = new Subject<string>();
  private search$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) {}

  movieSearchResults$ = this.search$.pipe(
    debounceTime(1000),
    switchMap((search) => {
      return this.http.get<MovieQueryResponse>(this.movieSearchUrl, {
        params: {
          query: search,
        },
      });
    })
  );

  tvShowSearchResults$ = this.search$.pipe(
    debounceTime(1000),
    switchMap((search) => {
      return this.http.get<TvShowQueryResponse>(this.tvShowSearchUrl, {
        params: {
          query: search,
        },
      });
    })
  );

  setSearchTerm(search: string) {
    this.searchSubject.next(search);
  }
}
