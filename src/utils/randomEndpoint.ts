import { TEndpoints } from "i-want.us";
import { Endpoints } from "../config/endpoints";

const RandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

export const RandomApiPath = (endpoint: TEndpoints) => {
	// get all possible urls from an endpoint name
	const urlArr = Object.keys(Endpoints[endpoint]);

	// if the endpoint selected is not
	if (urlArr.length === 0) return null;

	const selectedUrl = RandomElement(urlArr);

	// @ts-expect-error Type error for URL.
	const usableEndpoints = Endpoints[endpoint][selectedUrl];
	const randomEndpoint = RandomElement(usableEndpoints);

	return `${selectedUrl}${randomEndpoint}`;
};
