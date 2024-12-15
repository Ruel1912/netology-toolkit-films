import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { fetchFilmById, clearFilm } from '../store/film/filmSlice'
import Loading from '../shared/Loading/Loading'
import Error from '../shared/Error/Error'
import Title from '../shared/semantic/Title'
import Stars from '../shared/Rating/Stars'
import { GoHeartFill } from 'react-icons/go'
import FavouriteButton from '../shared/Button/FavouriteButton'

const FilmPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { film, isLoading, error } = useSelector((state: RootState) => state.film)
  const favorites = useSelector((state: RootState) => state.favorites.favorites)

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmById(id))
    }
    return () => {
      dispatch(clearFilm())
    }
  }, [id, dispatch])

  const isFavorite = favorites.some((fav) => fav.imdbID === id)

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />
  if (!film) return <Error error="Film not found" />

  return (
    <div className="flex gap-8 items-center">
      <div>
        <div className="bg-zinc-400">
          <img src={film.Poster} alt={`${film.Title} poster`} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Title>
          <div className='flex items-end gap-2'>
            <p>{film.Title}</p>
            {isFavorite && <GoHeartFill className='w-10 h-10 text-accent' />}
          </div>
        </Title>
        <div>
          <strong>Продюссер:</strong> {film.Director}
        </div>
        <div>
          <strong>Год выхода:</strong> {film.Year}
        </div>
        <div>
          <strong>Актеры:</strong> {film.Actors}
        </div>
        <div>
          <strong>Жанр:</strong> {film.Genre}
        </div>
        <div>
          <strong>Длительность:</strong> {film.Runtime}
        </div>
        <div className="flex items-center gap-2">
          <strong>Рейтинг:</strong> <Stars rate={Number(film.imdbRating)} />
        </div>
        <FavouriteButton film={film} />
      </div>
    </div>
  )
}

export default FilmPage
