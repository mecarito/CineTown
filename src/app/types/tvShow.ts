export interface TvShow {
  backdrop_path: String;
  first_air_date: String;
  genre_ids: number[];
  id: number;
  name: String;
  origin_country: string[];
  original_language: String;
  original_name: String;
  overview: String;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvShowQueryResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}
