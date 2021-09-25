import React, { FC } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const theme: DefaultTheme = {
	colors: {
		background: "#fce9ea",
		brand: "#ff7e95",
		font: "#f8a6b4",
		card: "#d99fa9",
		dots: "#ffd0d0",
	},
	fonts: ["Poppins", "sans-serif"],
	fontSize: { s: "1em", m: "1.5em", l: "2em", xl: "3em", xxl: "4em" },
};

const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;