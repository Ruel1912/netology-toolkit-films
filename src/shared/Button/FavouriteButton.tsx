import { useDispatch, useSelector } from 'react-redux'
import { IFilm } from '../../interface'
import { AppDispatch, RootState } from '../../app/store'
import { addToFavorites, removeFromFavorites } from '../../store/film/favoritesSlice'

interface Props {
  film: IFilm
}

const FavouriteButton = ({ film }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const isFavorite = favorites.some((fav) => fav.imdbID === film.imdbID)

  const handleFavoriteToggle = (film: IFilm) => {
    if (favorites.find((fav) => fav.imdbID === film.imdbID)) {
      dispatch(removeFromFavorites(film.imdbID))
    } else {
      dispatch(addToFavorites(film))
    }
  }
  return (
    <button
      onClick={() => handleFavoriteToggle(film)}
      className={`btn w-fit ${isFavorite ? 'btn-error' : 'btn-accent'}`}
    >
      {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
    </button>
  )
}

export default FavouriteButton