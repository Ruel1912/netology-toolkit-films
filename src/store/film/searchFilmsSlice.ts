import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IFilmSearch } from '../../interface'

const { VITE_IMDB_API_URL } = import.meta.env


export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async (searchValue: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${VITE_IMDB_API_URL}&s=${searchValue}`)
      if (!response.ok) {
        throw new Error('Failed to fetch films')
      }
      const data = (await response.json()) as IFilmSearch
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const searchFilmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: null as IFilmSearch | null,
    isLoading: false,
    error: null as string | null,
  },
  reducers: {
    clearFilms: (state) => {
      state.films = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.films = null
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false
        state.films = action.payload
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { clearFilms } = searchFilmsSlice.actions
export default searchFilmsSlice.reducer
