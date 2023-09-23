import axios from "axios";


const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '9bb0e122f5msh16d2580c8b6d586p105da8jsn42fdfdf9c75c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const Apifetch =async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}


