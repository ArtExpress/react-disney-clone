import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from "../ui/movieSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false,
    })
})