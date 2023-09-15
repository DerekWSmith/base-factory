const initialState = {
  value: '', // Initial state for the variable
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_SETTING_IN_APP_READ_IN_CAT':
      return {
        ...state,
        value: action.payload, // Update the variable in the state
      };
    default:
      return state;
  }
};

export default reducer;