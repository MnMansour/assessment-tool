import axios from 'axios';

const url = 'https://my-json-server.typicode.com/Integrify-Finland/jsonserver/classes';

export const fetchClassess = ()=>axios.get(url)