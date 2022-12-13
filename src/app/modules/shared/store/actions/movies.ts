import { createAction, props } from '@ngrx/store';
import { Movie } from 'app-types'

export const saveSelectedMovies = createAction(
  '[Movies Page] saving selected group of movies',
  props<{ movies: Movie[] }>()
);
