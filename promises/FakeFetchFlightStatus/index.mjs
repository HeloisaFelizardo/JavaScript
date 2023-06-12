import { fakeFetch } from './helpers.mjs';

const logFlightStatus = () => {
	fakeFetch('flight-status').then((data) => console.log(data));
};

// Sample usage (do not modify)
logFlightStatus();
