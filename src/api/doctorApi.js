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

// admin part
export async function createDoctor(doctor) {
  try {
    const response = await axios.post(`${url}/doctor/create`, doctor);
    const data = response.data;
    if (data.doctor) {
      return { data: data.doctor };
    }
    if (data.errors) {
      const error = data.errors.email;
      return { error };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function destroyDoctor(doctor) {
  try {
    const response = await axios.post(`${url}/doctor/destroy`, doctor);
    const data = response.data;
    if (data.doctor) {
      return { data: data.doctor };
    }
    if (data.errors) {
      const error = data.errors;
      return { error };
    }
  } catch (error) {
    console.log(error.message);
  }
}
