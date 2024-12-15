import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilm } from '../../interface'

const { VITE_IMDB_API_URL } = import.meta.env

export const fetchFilmById = createAsyncThunk(
  'film/fetchFilmById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${VITE_IMDB_API_URL}&i=${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch film data')
      }
      const data = (await response.json()) as IFilm
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Slice для управления состоянием фильма
const filmSlice = createSlice({
  name: 'film',
  initialState: {
    film: null as IFilm | null,
    isLoading: false,
    error: null as string | null,
  },
  reducers: {
    clearFilm: (state) => {
      state.film = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmById.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.film = null
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.isLoading = false
        state.film = action.payload
      })
      .addCase(fetchFilmById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { clearFilm } = filmSlice.actions
export default filmSlice.reducer
