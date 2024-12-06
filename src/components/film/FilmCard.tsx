import { FC } from 'react'
import { IFilm } from '../../interface'

interface FilmProps {
  film: IFilm
}

const FilmCard: FC<FilmProps> = ({ film }) => {
  return (
    <>
      <div>{film.Actors}</div>
      <div>{film.Director}</div>
      <div>{film.Genre}</div>
      <div>{film.Runtime}</div>
      <div>{film.Title}</div>
      <div>{film.Year}</div>
      <div>{film.imdbRating}</div>
      <div>{film.imdbID}</div>
      <img src={film.Poster} alt={film.Title + ' poster'} />
    </>
  )
}

export default FilmCard
