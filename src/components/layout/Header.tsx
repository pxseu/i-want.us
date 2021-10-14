import React, { FC } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	width: 100%;
	padding: ${({ theme }) => theme.fontSize.m};
	padding-bottom: ${({ theme }) => theme.fontSize.s};
	background-color: ${({ theme }) => `${theme.colors.dots}cc`};
	backdrop-filter: blur(5px);
	justify-content: space-between;
	align-items: center;
	padding: 5px 15px;
	z-index: 10;
`;

const CompHeader: FC = () => (
	<Header>
		<Logo />
		<Navbar />
	</Header>
);

export default CompHeader;
