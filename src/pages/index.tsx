import React, { FC } from "react";
import LandingIntro from "@/comp/LandingIntro";
import Layout from "@/comp/layout";

const Home: FC = () => (
	<Layout>
		<LandingIntro />
		{/* <CreateUrlDemo /> */}
	</Layout>
);

export default Home;
