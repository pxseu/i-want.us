import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	width: 100%;
	padding: ${({ theme }) => theme.fontSize.m};
	padding-bottom: ${({ theme }) => theme.fontSize.s};
	background-color: ${({ theme }) => `${theme.colors.dots}cc`};
	backdrop-filter: blur(5px);
	padding: 5px 5px;
	z-index: 10;
`;

const Text = styled.a`
	margin-left: 10px;
	font-weight: 900;
	font-size: ${(props) => props.theme.fontSize.logo};
	color: ${(props) => props.theme.colors.brand};
	text-decoration: none;
`;

const CompHeader: FC = () => (
	<Header>
		<Link href="/" passHref>
			<Text>i-want.us</Text>
		</Link>
	</Header>
);

export default CompHeader;
