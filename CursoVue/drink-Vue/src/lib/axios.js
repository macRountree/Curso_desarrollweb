import axios from 'axios';

//*Creamos una base de la url de axios (todos empiezan igual)

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default api;
