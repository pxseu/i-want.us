import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.brand};
`;

const LinkText = styled.a`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.brand};
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.font};
	}
`;

const NotFound: FC = () => (
	<Wrapper>
		<Text>The address you were looking for was not found.</Text>
		<Link href="/" passHref>
			<LinkText>Go home</LinkText>
		</Link>
	</Wrapper>
);

export default NotFound;
