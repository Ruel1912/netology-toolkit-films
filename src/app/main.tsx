import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PAGES } from './route'
import Root from '../pages/Root'
import FavouritesPage from '../pages/FavouritesPage'
import Error404 from '../shared/Error/Error404'
import FilmPage from '../pages/FilmPage'
import SearchPage from '../pages/SearchPage'

const router = createBrowserRouter([
  {
    path: PAGES.ROOT,
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: PAGES.ROOT,
        element: <SearchPage />,
      },
      {
        path: PAGES.FILM,
        element: <FilmPage />,
      },
      {
        path: PAGES.FAVORITES,
        element: <FavouritesPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
