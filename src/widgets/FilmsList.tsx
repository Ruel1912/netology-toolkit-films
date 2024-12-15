import FilmCard from '../components/film/FilmCard'
import { IFilm } from '../interface'
interface Props {
  films: IFilm[]
}
const FilmsList = ({ films }: Props) => {
  if (!films?.length) {
    return (<p className="text-center mt-4">Фильмы не найдены.</p>)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {films.map((film) => (
        <FilmCard key={film.imdbID} film={film} />
      ))}
    </div>
  )
}

export default FilmsList
