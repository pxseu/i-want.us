import "styled-components";

interface IPalette {
	main: string;
	contrastText: string;
}

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: "#fce9ea";
			brand: "#ff7e95";
			font: "#f8a6b4";
			card: "#d99fa9";
			dots: "#ffd0d0";
		};
		fonts: ["Poppins", "sans-serif"];
		fontSize: {
			s: "1em";
			m: "1.5em";
			l: "2em";
			xl: "3em";
			xxl: "4em";
			logo: "1.8em";
		};
	}
}
