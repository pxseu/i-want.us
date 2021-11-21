import React, { FC } from "react";
import Head from "next/head";
import { theme } from "./Theme";

interface IMetaTags {
	hostname?: string;
	url: string;
	text: string;
}

const MetaTags: FC<IMetaTags> = ({ hostname = "https://i-want.us", url, text }) => (
	<Head>
		<meta name="msapplication-TileColor" content={theme.colors.brand} />
		<meta name="theme-color" content={theme.colors.brand} />
		<meta property="og:url" content={hostname} />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="i-want.us" />
		<meta property="og:title" content="i-want.us" />
		<meta property="og:image" content={url} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="i-want.us" />
		<meta name="twitter:description" content={text} />
		<meta name="twitter:image" content={url} />
	</Head>
);

export default MetaTags;
