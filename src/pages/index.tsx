import Layout from "@/comp/layout";
import React, { FC } from "react";
import styles from "@/styles/Homepage.module.scss";
import WaifuCard from "@/comp/waifuCard";

const Home: FC = () => (
	<Layout>
		<div className={styles.contentWrapper}>
			<h1 className={styles.slogan}>
				Show your love <span className={styles.attention}>without</span> the stress
			</h1>
		</div>
		<div className={styles.cardWrapper}>
			<WaifuCard title="cuddle" image="/assets/cuddle-girl.png" className={styles.firstCard} />
			<WaifuCard title="kiss" image="/assets/kiss-girl.png" className={styles.secondCard} />
		</div>
	</Layout>
);

export default Home;
