import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { TvShowQueryResponse } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TvShowsService {
  private baseUrl = environment.baseUrl;
  private tvShowUrl = `${this.baseUrl}/tv`;

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
}
