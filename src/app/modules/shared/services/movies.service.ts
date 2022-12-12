import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { MovieQueryResponse, Movie } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl = environment.baseUrl;
  private movieUrl = `${this.baseUrl}/movie`;

  constructor(private http: HttpClient) {}

  $popular = this.http
    .get<MovieQueryResponse>(`${this.movieUrl}/popular`)
    .pipe(retry(1));

  $topRated = this.http
    .get<MovieQueryResponse>(`${this.movieUrl}/top_rated`)
    .pipe(retry(1));

  $upComing = this.http
    .get<MovieQueryResponse>(`${this.movieUrl}/upcoming`)
    .pipe(retry(1));

  $nowPlaying = this.http
    .get<MovieQueryResponse>(`${this.movieUrl}/now_playing`)
    .pipe(retry(1));

}
