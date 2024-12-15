import { Link } from 'react-router-dom'
import Error from './Error'
import { PAGES } from '../../app/route'

const Error404 = () => {
  return (
    <>
      <Error error={`Ошибка 404: Страница не найдена`} />
      <Link className='btn btn-accent w-fit ml-3' to={PAGES.ROOT}>Вернуться на главную</Link>
    </>
  )
}

export default Error404