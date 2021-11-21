import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Theme, { theme } from "@/comp/Theme";
import MetaTags from "@/comp/MetaTags";
import EmbedImg from "../../public/assets/embed.png";

NProgress.configure({
	showSpinner: false,
	trickle: true,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
        background-color: ${theme.colors.background};
        font-size: 16px;
		width: 100%;
		height: 100%;
    }

	#nprogress .bar {
		background: ${theme.colors.brand} !important;
	}

	#nprogress .peg {
		box-shadow: 0 0 15px ${theme.colors.brand}, 0 0 10px ${theme.colors.brand};
	}

	#nprogress .spinner-icon {
		border-top-color: ${theme.colors.brand};
		border-left-color: ${theme.colors.brand};
	}

	/* ::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {}

	::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.brand}cf; 
		border-radius: 10px;
		transition-duration: 0.2s;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${theme.colors.brand}88; 
	} */
`;

const Wrapper = styled.div`
	display: flex;
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
		<MetaTags
			url={EmbedImg.src}
			text="Show your loved one your feelings easily with this SAAS (Show your loves As A Service)"
		/>
		<Global />
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	</Theme>
);

export default App;
