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
    },
    addNewPost: (state, action) => {
        state.posts = [...state.posts, action.payload];
    }
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch(fetchAll(response.data));
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const response = await api.createPost(postData);
    dispatch(addNewPost(response.data));
    console.log(response.data);
  } catch (error) {
    console.log("here");
    throw new Error(error);
  }
}

// Action creators are generated for each case reducer function
export const { fetchAll, addNewPost } = postSlice.actions;

export default postSlice.reducer;