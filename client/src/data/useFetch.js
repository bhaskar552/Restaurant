import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:4000/restaurant')
      .then(res => setData(res.data)) 
  }, []);

  return data;
}

export default useFetch;