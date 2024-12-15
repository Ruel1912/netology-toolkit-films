export interface IFilm {
  Title: string
  Year: string
  Runtime: string
  Genre: string
  Director: string
  Actors: string
  Poster: string
  Plot: string
  imdbRating: string
  imdbID: string
}

export interface IFilmSearch {
  Search: IFilm[]
}
