import React, { FC } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import styles from "@/styles/GifDisplay.module.scss";
import { getServerSideImage } from "@/utils/getServerSideImage";
import MetaTags from "@/comp/metaTags";

export const getServerSideProps = async (context: GetServerSidePropsContext) => getServerSideImage("hug", context);

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ imagePath, from, to, hostname }) => (
	<>
		<MetaTags
			hostname={hostname!}
			imagePath={imagePath}
			text={`Hey${to ? ` ${to}` : ""}, wanna cuddle together?`}
		/>
		<div className={styles.contentWrapper}>
			<p className={styles.welcome}>Hey {to ? <i>{to}</i> : "you"}...</p>
			<p className={styles.message}>{from ? <i>{from}</i> : "Someone"} wants you to cuddle with them!</p>

			<div className={styles.imageWrapper}>
				<img className={styles.image} src={imagePath} alt="A wholesome gif" srcSet={imagePath} />
			</div>
		</div>
	</>
);

export default Home;
