import { IN_ACTION_CUDDLE, IN_ACTION_KISS } from "./inAction";

export interface Art {
	url: string;
	hostname: string;
}

export interface IPath {
	message: (recieve: string | null, author: string | null) => string;
	embed: (recieve: string | null, author: string | null) => string;
	random(): Art;
	placeholders: string[];
}

export interface IPaths {
	readonly [key: string]: IPath;
}

const defaults = {
	author: "someone",
	reciever: "you",
} as const;

const randomFromArray = (array: string[]) => array[Math.floor(Math.random() * array.length)];

const getRandomPath = (path: { [key: string]: { source: string; endpoints: string[] } }): Art => {
	const urlArr = Object.keys(path);
	const selectedUrl = randomFromArray(urlArr);
	const usableEndpoints = path[selectedUrl].endpoints;
	const randomEndpoint = randomFromArray(usableEndpoints);

	return { hostname: path[selectedUrl].source, url: `${selectedUrl}${randomEndpoint}` };
};

export const Paths = {
	"to-cuddle": {
		message(reciever, author) {
			return `Hey ${reciever || defaults.reciever}, ${author || defaults.author} wants to cuddle with you!`;
		},
		embed(reciever, author) {
			return `Hey${reciever ? ` ${reciever}` : ""}, wanna cuddle together?\n- ${author || defaults.author}`;
		},
		random: () =>
			getRandomPath({
				"https://nekos.life/api/v2/img/": { source: "https://nekos.life", endpoints: ["hug", "cuddle"] },
				"https://asuna.ga/api/": { source: "https://asuna.ga", endpoints: ["hug"] },
			}),
		placeholders: IN_ACTION_CUDDLE.map(({ url }) => url),
	},
	"to-kiss": {
		message(reciever, author) {
			return `Hey${reciever ? ` ${reciever}` : ""}, ${author ?? defaults.author} wants to kiss you!`;
		},
		embed(reciever, author) {
			return `Hey${reciever ? ` ${reciever}` : ""}, wanna share a kiss?\n- ${author || defaults.author}`;
		},
		random: () =>
			getRandomPath({
				"https://nekos.life/api/v2/img/": { source: "https://nekos.life", endpoints: ["kiss"] },
				"https://asuna.ga/api/": { source: "https://asuna.ga", endpoints: ["kiss"] },
			}),
		placeholders: IN_ACTION_KISS.map(({ url }) => url),
	},
} as IPaths;
