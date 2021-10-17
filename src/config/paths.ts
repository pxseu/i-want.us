export interface Message {
	title: string;
	message: string;
}

export interface Art {
	url: string;
	hostname: string;
}

export interface IPath {
	message: (recieve: string | null, author: string | null) => Message;
	embed: (recieve: string | null, author: string | null) => string;
	random(): Art;
}

export interface IPaths {
	readonly [key: string]: IPath;
}

const defaults = {
	author: "Someone",
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
			return {
				title: `Hey${reciever ? ` ${reciever}` : ""}...`,
				message: `${author ?? defaults.author} wants to cuddle with you!`,
			};
		},
		embed(reciever) {
			return `Hey${reciever ? ` ${reciever}` : ""}, wanna cuddle together?`;
		},
		random: () =>
			getRandomPath({
				"https://nekos.life/api/v2/img/": { source: "https://nekos.life", endpoints: ["hug", "cuddle"] },
				"https://asuna.ga/api/": { source: "https://asuna.ga", endpoints: ["hug"] },
			}),
	},
	"to-kiss": {
		message(reciever, author) {
			return {
				title: `Hey${reciever ? ` ${reciever}` : ""}...`,
				message: `${author ?? defaults.author} wants to kiss you!`,
			};
		},
		embed(reciever) {
			return `Hey${reciever ? ` ${reciever}` : ""}, wanna share a kiss?`;
		},
		random: () =>
			getRandomPath({
				"https://nekos.life/api/v2/img/": { source: "https://nekos.life", endpoints: ["kiss"] },
				"https://asuna.ga/api/": { source: "https://asuna.ga", endpoints: ["kiss"] },
			}),
	},
} as IPaths;
