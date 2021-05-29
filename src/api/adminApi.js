import axios from 'axios';

const url = 'http://localhost:5000';

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
