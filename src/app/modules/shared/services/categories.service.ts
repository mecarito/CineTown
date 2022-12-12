import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GenreQueryResponse } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private baseUrl = environment.baseUrl;
  private genreUrl = `${this.baseUrl}/genre`;

  constructor(private http: HttpClient) {}

  $movies = this.http
    .get<GenreQueryResponse>(`${this.genreUrl}/movie/list`)
    .pipe(retry(1));

  $tvShows = this.http
    .get<GenreQueryResponse>(`${this.genreUrl}/tv/list`)
    .pipe(retry(1));
}
