import { motion, Variants } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import Footer from "./Footer";
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

	@media (max-width: ${({ theme }) => theme.breakpoint.md}) {
		font-size: 14px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		font-size: 12px;
	}
	/* margin: 0 10px; */
`;

const LayoutVariants: Variants = {
	initial: {},
	loaded: {
		transform: ["scale(0.8)", "scale(1)"],
		// opacity: [0, 1],
		transition: { duration: 0.4, ease: "circOut" },
	},
};

interface LayoutProps {
	animate?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, animate }) => (
	<LayoutWrapper>
		<Header />
		<ChildrenWrapper variants={LayoutVariants} animate={animate && "loaded"}>
			{children}
		</ChildrenWrapper>
		<Footer />
	</LayoutWrapper>
);

export default Layout;
