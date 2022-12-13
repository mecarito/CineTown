import { createReducer, on } from '@ngrx/store';
import { saveSelectedTvShows } from '../actions';
import { TvShow } from 'app-types';

const initialState: TvShow[] = [];

export const TvShowReducer = createReducer(
  initialState,
  on(saveSelectedTvShows, (state, payload) => {
    return [...state, ...payload.tvShows];
  })
);
