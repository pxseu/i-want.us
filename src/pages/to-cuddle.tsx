import React, { FC } from "react";
import Head from "next/head";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchRandomEndpoint } from "@/utils/fetchRandomEndpoint";
import styles from "@/styles/to-cuddle.module.scss";

type Person = string | null;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const imagePath = await fetchRandomEndpoint("hug");

	let from: Person = null;
	let to: Person = null;

	try {
		const queryFrom = context.query.from;
		if (typeof queryFrom === "string") from = queryFrom;
	} catch (e) {
		/* */
	}

	try {
		const queryTo = context.query.to;
		if (typeof queryTo === "string") to = queryTo;
	} catch (e) {
		/* */
	}

	return {
		props: { imagePath, from, to, hostname: context.req.headers.host },
	};
};

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ imagePath, from, to, hostname }) => (
	<>
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
			<meta name="twitter:description" content="Wanna cuddle together?" />
			<meta name="twitter:image" content={imagePath} />
		</Head>
		<div className={styles.contentWrapper}>
			<p className={styles.welcome}>
				Hey{" "}
				{to ? (
					<>
						<i>{to}</i>
						...
					</>
				) : (
					"you..."
				)}
			</p>
			<p className={styles.message}>
				{from ? <span className={styles.name}>{from}</span> : "Someone"} wants you to cuddle with them!
			</p>

			<div className={styles.imageWrapper}>
				<img src={imagePath} alt="A wholesome gif" srcSet={imagePath} />
			</div>
			{/* <p className={styles.tip}>If you like them then feel free to do that!</p> */}
		</div>
	</>
);

export default Home;
