export interface Movie {
  adult: boolean;
  backdrop_path: String;
  genre_ids: number[];
  id: number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: number;
  poster_path: String;
  release_date: String;
  title: String;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface MovieQueryResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
