import React, { FC } from "react";
import FirstView from "@/comp/Landing/FirstView";
import Layout from "@/comp/layout";
import InAction from "@/comp/Landing/InAction";
import UserQuestion from "@/comp/Landing/UserQuestion";
import MetaTags from "@/comp/MetaTags";

const Home: FC = () => (
	<Layout>
		<MetaTags
			url=""
			text="Show your loved one your feelings easily with this SAAS (Show your loves As A Service)"
		/>
		<FirstView />
		<InAction />
		<UserQuestion />
	</Layout>
);

export default Home;
