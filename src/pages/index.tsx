import LandingIntro from "@/comp/LandingIntro";
import Layout from "@/comp/layout";
import React, { FC } from "react";

const Home: FC = () => (
	<Layout>
		<LandingIntro />
		{/* <CreateUrlDemo /> */}
	</Layout>
);

export default Home;
