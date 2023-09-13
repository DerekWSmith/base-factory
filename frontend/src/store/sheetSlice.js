// sheetSlice.js

import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";
//
export const fetchSheetData = createAsyncThunk(
  'sheet/fetchSheetData',
  async (params, thunkAPI) => {
    const queryParams = {
      page: 1,
      ...params,
    };


    try {
        console.log("Heading for data")
      const response = await fetch('/testdata/testdata.json', { params: queryParams });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

console.log("Initialising the slice")

const sheetSlice = createSlice({
  name: 'sheet',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSheetData.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Pending")
      })
      .addCase(fetchSheetData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log("data")
      })
      .addCase(fetchSheetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Error")
      });
  },
});

export default sheetSlice.reducer;
