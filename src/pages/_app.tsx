import type { AppProps } from "next/app";
import Theme, { theme } from "@/comp/Theme";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const Global = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${theme.fonts.join(", ")};
        background-color:  ${theme.colors.background};
        font-size: 16px;
		width: 100%;
		height: 100%;
    }
`;

const App = ({ Component, pageProps }: AppProps) => (
	<Theme>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="fonts.gstatic.com" />
			{/* eslint-disable-next-line @next/next/no-page-custom-font */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Arvo:ital@0;1&family=Poppins:wght@600;900&display=swap"
			/>
		</Head>
		<Global />
		<Component {...pageProps} />
	</Theme>
);
export default App;
