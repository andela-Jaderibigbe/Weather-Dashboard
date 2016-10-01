import axios from 'axios';

export const FETCH_RAINFALL_DATA = 'FETCH_RAINFALL_DATA';

const ROOT_URL = `http://private-4945e-weather34.apiary-proxy.com/weather34/rain`

export function fetchWeather() {
	const request = axios.get(ROOT_URL);
	return {
		type    : FETCH_RAINFALL_DATA,
		payload : request
	}
}