// logoReducer.js



const initialState = {
  url: '/images/YYHF Logo RED.svg',
};

const logoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGO_URL' :
      return { url: action.payload} ;
    // You can add actions to update the logo if needed
    default:
      return state;
  }
};

export default logoReducer;
