/* jshint esversion: 11 */
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import {Container} from 'react-bootstrap';
// import rows from "../components/testdata.json";
import {TableC} from "../components/hotTable";





const HomePage = () => {
  // const dispatch = useDispatch();
  // const songs = useSelector(selectAllSongs);
  // const fetched = useSelector(selectStatus);
  // const { fetchedPlaylists } = useSelector(selectPlaylists);

  useEffect(() => {
    console.log('Home page use effect 1....');


  }, []);

  useEffect(() => {
    console.log('Home page use effect 2....');

  }, []);




  return (
      <div>
        <h4>Home page</h4>
  <TableC />
        </div>
  );
};

export default HomePage;
