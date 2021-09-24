import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./Header";

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-image: radial-gradient(
		${({ theme }) => theme.colors.dots} 10%,
		${({ theme }) => theme.colors.background} 20%
	);
	background-position: 0 0;
	background-size: 20px 20px;
	width: 100%;
`;

const fadeIn = keyframes`
	from {
		transform: scale(0.8);
		opacity: 0;
	}

	to {
		transform: scale(1);
		opacity: 1;
	}
`;

const ChildrenWrapper = styled.div`
	animation: ${fadeIn} 0.2s linear;
	transition: opacity 0.2s linear;
	flex: 1;
	font-family: ${({ theme }) => theme.fonts.join(", ")};
	font-size: 16px;
`;

const Layout: FC = ({ children }) => (
	<LayoutWrapper>
		<Header />
		<ChildrenWrapper>{children}</ChildrenWrapper>
	</LayoutWrapper>
);

export default Layout;
