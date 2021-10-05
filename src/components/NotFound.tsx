import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import CenteredCard from "./CenteredCard";

const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.background};
	text-align: center;
`;

const LinkText = styled.a`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.background};
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.font};
	}
`;

const NotFound: FC = () => (
	<CenteredCard>
		<Text>The address you were looking for was not found.</Text>
		<Link href="/" passHref>
			<LinkText>Go home</LinkText>
		</Link>
	</CenteredCard>
);

export default NotFound;
