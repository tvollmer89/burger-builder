import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-bb5fc.firebaseio.com/'
});

export default instance;
