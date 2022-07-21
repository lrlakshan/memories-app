import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api/index.js';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    fetchAll: (state, action) => {
        state.posts = [action.payload];
    }
  },
});

export const getPostsAsync = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch(fetchAll(response.data));
    console.log(response);
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const { fetchAll } = postSlice.actions;

export default postSlice.reducer;