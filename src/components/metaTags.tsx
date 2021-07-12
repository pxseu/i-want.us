import Head from "next/head";
import React, { FC } from "react";

interface IMetaTags {
	hostname: string;
	imagePath: string;
	text: string;
}

const MetaTags: FC<IMetaTags> = ({ hostname, imagePath, text }) => (
	<Head>
		<meta name="msapplication-TileColor" content="#f52e77" />
		<meta name="theme-color" content="#f52e77" />
		<meta property="og:url" content={hostname} />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="i-want.us" />
		<meta property="og:title" content="i-want.us" />
		<meta property="og:image" content={imagePath} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="i-want.us" />
		<meta name="twitter:description" content={text} />
		<meta name="twitter:image" content={imagePath} />
	</Head>
);

export default MetaTags;
