import { FC } from 'react'
import { IFilm } from '../../interface'
import { Link } from 'react-router-dom'
import FavouriteButton from '../../shared/Button/FavouriteButton'

interface FilmProps {
  film: IFilm
}

const FilmCard: FC<FilmProps> = ({ film }) => {

  return (
    <div className='p-4 rounded-lg'>
      <Link to={`/film/${film.imdbID}`} className='block bg-zinc-400 w-full h-100 overflow-hidden rounded-md hover:scale-105 transition-transform'>
        <img className='w-full h-full object-cover object-top' src={film.Poster} alt={film.Title + ' poster'} />
      </Link>
      <h2 className='font-medium text-2xl my-4'><Link to={`/film/${film.imdbID}`}>{film.Title}</Link></h2>
      {film?.Plot && (<p className='mb-4'>{film.Plot}</p>)}
      <FavouriteButton film={film} />
    </div>
  )
}

export default FilmCard
