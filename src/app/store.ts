import { configureStore } from '@reduxjs/toolkit'
import searchFilmsSlice from '../store/film/searchFilmsSlice'
import filmSlice from '../store/film/filmSlice'
import favoritesSlice from '../store/film/favoritesSlice'

export const store = configureStore({
  reducer: {
    films: searchFilmsSlice,
    film: filmSlice,
    favorites: favoritesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
