import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie, Categories } from '../types';

@Injectable()
export class MovieService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUpcommingMovies() {
    return this.http.get<Movie>(`${this.baseUrl}movies/upcomming`);
  }

  getTrendingMovies() {
    return this.http.get<Movie>(`${this.baseUrl}movies/trending/movies`);
  }

  getTvshows() {
    return this.http.get<Categories>(`${this.baseUrl}tv/popular`);
  }

  getMoviesCategories() {
    return this.http.get<Categories>(`${this.baseUrl}movies/categories`);
  }
 
}
