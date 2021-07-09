import { Person, TEndpoints } from "i-want.us";
import { GetServerSidePropsContext } from "next";
import { fetchRandomEndpoint } from "./fetchRandomEndpoint";

export const getServerSideImage = async (endpoint: TEndpoints, context: GetServerSidePropsContext) => {
	const imagePath = await fetchRandomEndpoint(endpoint);

	let from: Person = null;
	let to: Person = null;

	try {
		const queryFrom = context.query.from;
		if (typeof queryFrom === "string") from = queryFrom;
	} catch (e) {
		/* */
	}

	try {
		const queryTo = context.query.to;
		if (typeof queryTo === "string") to = queryTo;
	} catch (e) {
		/* */
	}

	return {
		props: { imagePath, from, to, hostname: context.req.headers.host },
	};
};
