import Layout from "@/comp/layout";
import React, { FC } from "react";
import styles from "@/styles/Homepage.module.scss";

const Home: FC = () => (
	<Layout>
		<div className={styles.contentWrapper}>
			<h1 className={styles.slogan}>
				Show your love <span className={styles.attention}>without</span> the stress
			</h1>
		</div>
	</Layout>
);

export default Home;
