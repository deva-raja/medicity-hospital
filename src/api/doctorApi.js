import axios from 'axios';

const url = 'http://localhost:5000';

export async function getDoctor() {
  try {
    const response = await axios.get(`${url}/doctor/show`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function loginDoctor() {
  try {
    const response = await axios.get(`${url}/doctor/login`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function logoutDoctor() {
  try {
    const response = await axios.get(`${url}/doctor/logout`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createDoctor(message) {
  try {
    const response = await axios.post(`${url}/doctor/create`, message);
    const data = response.data;
    if (data.message) {
      return { data: response.data.message };
    }
    if (data.errors) {
      const error = response.data.errors.errorMsg;
      return { error };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function destroyDoctor(id) {
  try {
    const response = await axios.get(`${url}/doctor/destroy`, { id });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
