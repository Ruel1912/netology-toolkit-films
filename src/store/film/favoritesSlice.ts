import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilm } from '../../interface'

// Читаем избранное из localStorage (если есть)
const loadFavoritesFromLocalStorage = (): IFilm[] => {
  const data = localStorage.getItem('favorites')
  return data ? JSON.parse(data) : []
}

const saveFavoritesToLocalStorage = (favorites: IFilm[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    addToFavorites: (state, action: PayloadAction<IFilm>) => {
      const film = action.payload
      if (!state.favorites.find((item) => item.imdbID === film.imdbID)) {
        state.favorites.push(film)
        saveFavoritesToLocalStorage(state.favorites)
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (film) => film.imdbID !== action.payload
      )
      saveFavoritesToLocalStorage(state.favorites)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
