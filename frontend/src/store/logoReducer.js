// logoReducer.js

const initialState = {
  logoUrl: '/images/YYHF Logo RED.svg', // Replace with your actual logo URL
};

const logoReducer = (state = initialState, action) => {
  switch (action.type) {
    // You can add actions to update the logo if needed
    default:
      return state;
  }
};

export default logoReducer;
