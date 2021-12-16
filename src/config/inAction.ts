interface InAction {
	title: string;
	url: string;
	id: string;
}

const CUDDLE_TITLE = "Hey, wanna cuddle together?";

export const IN_ACTION_CUDDLE: InAction[] = [
	{
		title: CUDDLE_TITLE,
		url: "https://cdn.nekos.life/hug/hug_075.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://cdn.nekos.life/hug/hug_082.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://cdn.nekos.life/hug/hug_052.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://cdn.nekos.life/hug/hug_079.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://asuna.ga/images/hug/image/hug36.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://asuna.ga/images/hug/image/hug17.gif",
	},
	{
		title: CUDDLE_TITLE,
		url: "https://asuna.ga/images/hug/image/hug16.gif",
	},
].map((action, index) => ({ ...action, id: `C-${index}` }));

const KISS_TITLE = "Hey, wanna kiss?";

export const IN_ACTION_KISS: InAction[] = [
	{
		title: KISS_TITLE,
		url: "https://cdn.nekos.life/kiss/kiss_046.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://cdn.nekos.life/kiss/kiss_091.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://cdn.nekos.life/kiss/kiss_031.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://asuna.ga/images/kiss/image/kiss36.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://asuna.ga/images/kiss/image/kiss11.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://asuna.ga/images/kiss/image/kiss10.gif",
	},
	{
		title: KISS_TITLE,
		url: "https://asuna.ga/images/kiss/image/kiss3.gif",
	},
].map((action, index) => ({ ...action, id: `K-${index}` }));

export const IN_ACTION: InAction[] = [...IN_ACTION_CUDDLE, ...IN_ACTION_KISS];

// const shuffle = <T>(array: T[]): T[] => {
// 	const local = array;

// 	for (let i = 0; i < local.length; i += 1) {
// 		const j = Math.floor(Math.random() * i);
// 		[local[i], local[j]] = [local[j], local[i]];
// 	}

// 	return local;
// };

// export const IN_ACTION = () => shuffle(IN_ACTION_DATA).slice(0, 9);
