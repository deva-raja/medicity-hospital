import axios from 'axios';

const url = 'https://medicity-server.herokuapp.com';

export async function loginAdmin(values) {
  try {
    const response = await axios.post(`${url}/admin/login`, values);
    const data = response.data;
    if (data.admin) {
      console.log(data);
      localStorage.setItem('admin', data.token);
      return { data: data };
    }
    if (data.errors) {
      const error = data.errors;
      return { error };
    }
  } catch (error) {
    console.log(error.message);
  }
}
