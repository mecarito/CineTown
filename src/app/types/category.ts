export interface Category {
  id: number;
  name: string;
}

export interface GenreQueryResponse {
  genres: Category[]
}
