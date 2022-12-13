import { createSelector } from '@ngrx/store';
import { Store, Movie, TvShow } from 'app-types';

const selectMovies = (state: Store) => state.movies;
export const selectCategoryMovies = createSelector(
  selectMovies,
  (state: Movie[]) => state
);

const selectTvShows = (state: Store) => state.tvShows;
export const selectCategoryTvShows = createSelector(
  selectTvShows,
  (state: TvShow[]) => state
);
