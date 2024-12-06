import { useParams } from 'react-router-dom'
import { useJsonFetch } from '../hooks/JsonFetch'
import Loading from '../shared/Loading/Loading'
import Error from '../shared/Error/Error'
const { VITE_IMDB_API_URL } = import.meta.env

const FilmPage = () => {
  const { id } = useParams()

  const [filmData, isLoading, error] = useJsonFetch(
    `${VITE_IMDB_API_URL}&i=${id}`
  )

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error as string} />
  }

  if (!filmData) {
    return <Error error="Film not found" />
  }

  return (
    <div className="flex gap-8 items-center">
      <div>
        <div className="bg-zinc-400">
          <img src={filmData.Poster} alt={filmData.Title + ' poster'} />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className="text-4xl font-bold mb-4">{filmData.Title}</h1>
        <div>
          <strong>Актеры:</strong> {filmData.Actors}
        </div>
        <div>
          <strong>Продюссер:</strong> {filmData.Director}
        </div>
        <div>
          <strong>Жанр:</strong> {filmData.Genre}
        </div>
        <div>
          <strong>Длительность:</strong> {filmData.Runtime}
        </div>
        <div>
          <strong>Год выхода:</strong> {filmData.Year}
        </div>
        <div>
          <strong>Рейтинг:</strong> {filmData.imdbRating}
        </div>
      </div>
    </div>
  )
}

export default FilmPage
