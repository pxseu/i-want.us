import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

const Url = styled.a`
	margin-left: 0.5rem;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.brand};
	font-size: ${({ theme }) => theme.fontSize.m};
	/* font-weight: bold;
	text-transform: uppercase;
    letter-spacing: 0.1rem; */
	transition: all 0.1s ease-in-out;
	padding: 5px 5px;
	border-radius: 5px;

	&:hover {
		/* color: ${({ theme }) => theme.colors.dots}; */
		background-color: ${({ theme }) => theme.colors.card}50;
	}

	outline: none;
`;

export const InternalUrl: FC<Parameters<typeof Url>[0]> = ({ children, href, ...props }) => (
	<Link href={href} passHref>
		<Url {...props}>{children}</Url>
	</Link>
);

export const ExternalUrl: FC<Parameters<typeof Url>[0]> = ({ children, ...props }) => (
	<Url target="_blank" rel="noreferrer" title={props.href} {...props}>
		{children}
	</Url>
);
