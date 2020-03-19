import axios from 'axios';

const api3   = axios.create({ baseURL: 'https://coronavirus-19-api.herokuapp.com/countries/brazil'});

export default api3


