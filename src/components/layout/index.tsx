import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	background-image: radial-gradient(
		${({ theme }) => theme.colors.dots} 10%,
		${({ theme }) => theme.colors.background} 20%
	);
	background-position: 0 0;
	background-size: 20px 20px;
	width: 100%;
`;

const ChildrenWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex: 1;
	font-family: ${({ theme }) => theme.fonts.join(", ")};
	font-size: 16px;
`;

const Layout: FC = ({ children }) => (
	<LayoutWrapper>
		<Header />
		<ChildrenWrapper
			animate={{
				transform: ["scale(0.8)", "scale(1)"],
				opacity: [0, 1],
				transition: { duration: 0.4, ease: "circOut" },
			}}
		>
			{children}
		</ChildrenWrapper>
	</LayoutWrapper>
);

export default Layout;
