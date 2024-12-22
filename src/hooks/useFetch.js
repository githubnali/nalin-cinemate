import { useState, useEffect } from 'react';

export const useFetch = (apiPath, queryTerm = '') => {
  //set the api data
  const [data, setData] = useState([]);

  //url set up
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  //fetch movies and update the movies list
  useEffect(() => {
    async function fetchMovies() {
      const resp = await fetch(url);
      const getData = await resp.json();
      setData(getData.results);
    }
    fetchMovies();
  }, [url]);

  // return the data
  return { data };
};
