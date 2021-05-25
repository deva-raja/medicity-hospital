import axios from 'axios';

const url = 'http://localhost:5000';

export async function getMessage() {
  try {
    const response = await axios.get(`${url}/message/show`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
}

export async function sendMessage(message) {
  try {
    const response = await axios.post(`${url}/message/create`, message);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
}

export async function destroyMessage(id) {
  try {
    const response = await axios.get(`${url}/message/destroy`, { id });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
}
