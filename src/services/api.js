import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pronatecinscricao.com.br',
});

export default api;
