import axios from 'axios';

const api = axios.create({
	method: 'get',
	baseURL: 'https://api.github.com/repos',
});

export default api;
