import React, { FC } from "react";
import styles from "@/styles/Header.module.scss";

const Header: FC = () => (
	<header className={styles.header}>
		<p className={styles.brand}>i-want.us</p>
	</header>
);

export default Header;
