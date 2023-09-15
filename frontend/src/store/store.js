// store.js
import thunk from 'redux-thunk'
import {combineReducers} from 'redux';
import logoReducer from './logoReducer';

import {configureStore} from "@reduxjs/toolkit";
import testingreducer from "./testingreducers";
import sheetReducer from "./sheetSlice";


const rootReducer = combineReducers({
    logo: logoReducer,
    test: testingreducer,
    sheet : sheetReducer ,

    // Add other reducers here if needed
});

console.log("Store initialised for data")
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});


export default store;