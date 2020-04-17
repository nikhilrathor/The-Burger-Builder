import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-392ad.firebaseio.com/'
});

export default instance;