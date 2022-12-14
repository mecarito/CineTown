import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { TvShowQueryResponse, TvShow } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TvShowsService {
  private baseUrl = environment.baseUrl;
  private tvShowUrl = `${this.baseUrl}/tv`;
  private discoverTvShowUrl = `${this.baseUrl}/discover/tv`;

  constructor(private http: HttpClient) {}

  $popular = this.http
    .get<TvShowQueryResponse>(`${this.tvShowUrl}/popular`)
    .pipe(retry(1));

  $topRated = this.http
    .get<TvShowQueryResponse>(`${this.tvShowUrl}/top_rated`)
    .pipe(retry(1));

  $nowPlaying = this.http
    .get<TvShowQueryResponse>(`${this.tvShowUrl}/on_the_air`)
    .pipe(retry(1));

  getGenreTvShows(genreId: string): Observable<TvShowQueryResponse> {
    return this.http
      .get<TvShowQueryResponse>(`${this.discoverTvShowUrl}`, {
        params: {
          with_genres: genreId,
        },
      })
      .pipe(retry(1));
  }

  getTvShow(tvShowId: string): Observable<TvShow> {
    return this.http
      .get<TvShow>(`${this.tvShowUrl}/${Number(tvShowId)}`)
      .pipe(retry(1));
  }
}
