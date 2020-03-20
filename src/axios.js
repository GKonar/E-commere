import axios from 'axios';

const instance = axios.create({
  baseURL: `https://handcrafted-831b3.firebaseio.com/`
});

export { instance };