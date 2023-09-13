import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/dist/handsontable.full.min.css';
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import { fetchSheetData } from '../store/sheetSlice'; // Import your slice where fetchSheetData is defined
registerAllModules();






export const TableC = () => {
  const dispatch = useDispatch();
  const sheetData = useSelector((state) => state.sheet.data);
  const loading = useSelector((state) => state.sheet.loading);
  const error = useSelector((state) => state.sheet.error);

  useEffect(() => {
    // Dispatch the async thunk to fetch data when the component mounts
    console.log("useEffect")
    dispatch(fetchSheetData({ /* your params here */ }));
  }, [dispatch]);

  // Render your component based on the loading and error states
  if (loading) {
    // Render a loading indicator
    console.log("Loading")
    return <div>Loading...</div>;
  }

  if (error) {
    // Render an error message
    return <div>Error: {error}</div>;
  }

  // Render your data when it's available
  return (

      <HotTable
        // set `HotTable`'s props here
        data={sheetData}
        rowHeaders={true}
        colHeaders={true}
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
          columnSorting={true}
        filters={true}
        manualRowMove={true}
        manualColumnMove={true}
        manualColumnResize={true}
        width={'100vw'}
        height={'70vh'}
        dragToScroll={true}

      />

  );
};