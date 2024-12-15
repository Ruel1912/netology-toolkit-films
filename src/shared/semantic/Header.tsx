import { GoHeartFill } from 'react-icons/go'
import { PAGES } from '../../app/route'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-white bg-accent p-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={PAGES.ROOT} className="font-medium uppercase text-2xl">
            My Cinema
          </Link>
          <Link to={PAGES.FAVORITES} className="btn btn-ghost btn-square btn-sm">
            <GoHeartFill className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
