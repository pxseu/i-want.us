import React, { FC } from "react";
import FirstView from "@/comp/Landing/FirstView";
import Layout from "@/comp/layout";
import InAction from "@/comp/Landing/InAction";
import UserQuestion from "@/comp/Landing/UserQuestion";

const Home: FC = () => (
	<Layout>
		<FirstView />
		<InAction />
		<UserQuestion />
	</Layout>
);

export default Home;
