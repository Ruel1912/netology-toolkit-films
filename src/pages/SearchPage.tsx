import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { fetchFilms, clearFilms } from '../store/film/searchFilmsSlice'
import Title from '../shared/semantic/Title'
import Loading from '../shared/Loading/Loading'
import Error from '../shared/Error/Error'
import FilmsList from '../widgets/FilmsList'
import { IFilm } from '../interface'

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const { films, isLoading, error } = useSelector((state: RootState) => state.films)

  useEffect(() => {
    if (searchValue.trim().length < 3) {
      dispatch(clearFilms())
      return
    }

    const timeout = setTimeout(() => {
      dispatch(fetchFilms(searchValue.trim()))
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchValue, dispatch])

  return (
    <>
      <Title>Поиск</Title>
      <input
        type="search"
        placeholder="Введите название желаемого фильма"
        className="input input-bordered w-full mb-4"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {films && <FilmsList films={films.Search as IFilm[]} />}
    </>
  )
}

export default SearchPage
