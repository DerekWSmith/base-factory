import axios from 'axios';
import  { storeSheetData }  from '../store/actions'; // Import your action to store data
import store from '../store/store'; // Import your Redux store




// Define a function to fetch and store data
export const fetchDataAndStoreInRedux = async () => {
  // return async () => {
    console.error("Axios fetching ");
    try {
      // Fetch data from the URL
      const response = await axios.get('/testdata/testdata.json');
      console.log("response")
      console.log(response.data)
      // Extract the array from the response data
      const dataArray = response.data; // Assuming it's an array

      // Dispatch an action to store the data in the Redux store
      store.dispatch(storeSheetData(dataArray));
    } catch (error) {
      // Handle errors here if needed
      console.error("Axios fetching ewrror");
    }
  // };
};
