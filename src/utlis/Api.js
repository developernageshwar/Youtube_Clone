import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'e5ed7d9fd5mshe70727d751e17a8p1b1db4jsnb56b006a5c69',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi =async (url)=>{
    const{data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;

  }