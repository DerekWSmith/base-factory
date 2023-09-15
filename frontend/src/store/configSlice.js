
import {  createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    api_url: '', // Initialize api_url to an empty string
  },
  reducers: {
    setApiUrl: (state, action) => {
      state.api_url = action.payload; // Update api_url with the provided value
    },
  },
});

export const selectApiUrl = (state) => state.api.api_url;
