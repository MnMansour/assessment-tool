import axios from 'axios';


const url = 'https://my-json-server.typicode.com/Integrify-Finland/jsonserver/users';
const getApi= url => axios.get(url);

export const fetchUsers = (callback) => getApi(url)
    .then(response => callback(response.data))
    .catch(response => console.log(response));