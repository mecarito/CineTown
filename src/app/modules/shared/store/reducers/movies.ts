import { createReducer, on } from '@ngrx/store';
import { saveSelectedMovies } from '../actions';
import { Movie } from 'app-types';

const initialState: Movie[] = [];

export const MoviesReducer = createReducer(
  initialState,
  on(saveSelectedMovies, (state, payload) => {
    return [...state, ...payload.movies];
  })
);
