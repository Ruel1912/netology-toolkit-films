import FilmItem from '../components/film/FilmCard'
import { IFilm } from '../interface'

interface Props {
  films: IFilm[]
}
const FilmsList = ({ films }: Props) => {
  return (
    <div className="flex">
      {films.map((film) => (
        <FilmItem key={film.imdbID} film={film} />
      ))}
    </div>
  )
}

export default FilmsList
