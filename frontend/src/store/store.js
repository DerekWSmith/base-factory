// store.js
import thunk from 'redux-thunk'
import {  combineReducers } from 'redux';
import logoReducer from './logoReducer';

import {configureStore} from "@reduxjs/toolkit";
import sheetSlice from "./sheetSlice";

const rootReducer = combineReducers({
  logo: logoReducer,
   sheet: sheetSlice,

  // Add other reducers here if needed
});

console.log("Store initialised for data")
const store =  configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});



export default store ;