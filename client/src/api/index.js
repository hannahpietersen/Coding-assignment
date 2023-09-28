import axios from 'axios';

const API_URL = '';

export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/get_countries`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
