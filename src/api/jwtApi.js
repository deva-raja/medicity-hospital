import axios from 'axios';

const url = 'https://medicity-server.herokuapp.com';

export async function jwtAuthCheck(localStorageJwt) {
  try {
    const response = await axios.post(`${url}/auth`,localStorageJwt);
    const data = response.data;
    return data.page;
  } catch (error) {
    console.log(error.message);
  }
}
