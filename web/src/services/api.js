import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://telzir-server.herokuapp.com/'
});

export default api;