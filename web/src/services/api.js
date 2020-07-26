import axios from 'axios';

const api = axios.create({
  baseURL: 'https://telzir-server.herokuapp.com/'
});

export default api;