import { Movie } from './movie';
import { TvShow } from './tvShow';

export interface Store {
  movies: Movie[];
  tvShows: TvShow[];
}
