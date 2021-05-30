import axios from 'axios';

const url = 'http://localhost:5000';

// here appointment will have an object with the doctor id
export async function getAppointments(id) {
  try {
    const response = await axios.post(`${url}/appointment/show`, { doctor_id: id });
    return response.data;
  } catch (error) {
    console.log(error.appointment);
  }
}

export async function sendAppointments(appointment) {
  try {
    const response = await axios.post(`${url}/appointment/create`, appointment);
    const data = response.data;
    if (data.appointment) {
      return { data: data.appointment };
    }
    if (data.errors) {
      const error = data.errors.errorMsg;
      return { error };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function destroyAppointments(id) {
  try {
    const response = await axios.post(`${url}/appointment/destroy`, { id });
    return response.data;
  } catch (error) {
    console.log(error.appointment);
  }
}
