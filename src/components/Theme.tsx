import React, { FC } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const theme: DefaultTheme = {
	colors: {
		background: "#fce9ea",
		brand: "#ff7e95",
		font: "#f8a6b4",
		card: "#d99fa9",
		dots: "#ffd0d0",
		darkDots: "#ffb0b0",
	},
	fonts: ["Poppins", "sans-serif"],
	fontSize: { s: "1em", m: "1.5em", l: "2em", xl: "3em", xxl: "4em", logo: "1.8em" },
	shadow: {
		primary: "2px 2px 15px 2px rgba(0, 0, 0, 0.2)",
		secondary: "5px 0px 5px 2px rgba(0, 0, 0, 0.1)",
	},
};

const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
