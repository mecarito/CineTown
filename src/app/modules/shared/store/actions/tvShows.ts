import { createAction, props } from '@ngrx/store';
import { TvShow } from 'app-types';

export const saveSelectedTvShows = createAction(
  '[Tvshow Page] saving selected group of Tv shows',
  props<{ tvShows: TvShow[] }>()
);
