import React, { FC } from "react";
import styles from "@/styles/Layout.module.scss";
import Header from "./header";

const Layout: FC = ({ children }) => (
	<div className={styles.layoutWrapper}>
		<Header />
		<div className={styles.childWrapper}>{children}</div>
	</div>
);

export default Layout;
