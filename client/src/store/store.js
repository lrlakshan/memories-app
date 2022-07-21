import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../reducers/postSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})