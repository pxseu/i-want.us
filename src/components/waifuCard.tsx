import React, { FC } from "react";
import styles from "@/styles/WaifuCard.module.scss";

interface IWaifuCard {
	title: string;
	image: string;
	className?: string;
}

const WaifuCard: FC<IWaifuCard> = ({ title, image, className }) => (
	<div className={[styles.waifuWrapper, className].join(" ")}>
		<h3 className={styles.cardTitle}>{title}</h3>
		<img className={styles.waifuImage} src={image} alt="A cute anime girl" />
	</div>
);

export default WaifuCard;
