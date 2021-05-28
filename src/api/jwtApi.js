import axios from 'axios';

const url = 'http://localhost:5000';

export async function jwtAuthCheck() {
  try {
    const response = await axios.get(`${url}/auth`);
    const data = response.data;
    return data.page;
  } catch (error) {
    console.log(error.message);
  }
}
