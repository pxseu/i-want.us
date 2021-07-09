import { TEndpoints } from "i-want.us";
import fetch from "node-fetch";
import { RandomApiPath } from "./randomEndpoint";

export const fetchRandomEndpoint = async (endpoint: TEndpoints): Promise<string> => {
	const path = RandomApiPath(endpoint);

	if (!path) throw new Error("Endpoint was not found");

	const response = await fetch(path);
	const json = await response.json();

	return json.url;
};
