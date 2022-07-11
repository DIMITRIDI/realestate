import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
   const { data } = await axios.get((url), {
      headers: {
         'X-RapidAPI-Key': '8b30eea171msh52013e1b03336cfp1d085bjsn869b0fa9727f',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
   });
      
   return data;
}