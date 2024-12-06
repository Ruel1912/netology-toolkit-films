import { Outlet } from 'react-router-dom'
import Header from '../shared/semantic/Header'

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Root
