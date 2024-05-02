import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/Filterslice'

export const store = configureStore({
   reducer:{
    filterjob : filterReducer
   }
})