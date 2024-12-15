import { useSelector } from 'react-redux'
import Title from '../shared/semantic/Title'
import FilmsList from '../widgets/FilmsList'
import { RootState } from '../app/store'

const FavouritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)

  return <>
    <Title>Избранное</Title>
    <FilmsList films={favorites} />
  </>
}

export default FavouritesPage
