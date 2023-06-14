import axios from 'axios';

export const fetchData = async () => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=quilting');
  console.log(response)
  return response.data.items;
};