import { STORE_SHEET_DATA }  from './actions'



const initialState = {
  data: [], // Initial state for the 'sheet.data' key
  // other properties
};



const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_SHEET_DATA:
      return {
        ...state,
        data: action.payload, // Update the 'data' property within the 'sheet' slice
      };
    // other cases
    default:
      return state;
  }
};

export default sheetReducer;
