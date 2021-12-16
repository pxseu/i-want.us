import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import CenteredCard from "@/comp/CenteredCard";
import Layout from "@/comp/layout";
import error from "../../public/assets/error.gif";

const Text = styled.p`
	margin-top: 10px;
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

const ImageWrapper = styled.div`
	height: 300px;
	width: 100%;
	max-height: 270px;
	max-width: 500px;
	margin: 30px 10px;
	position: relative;
	background-color: ${({ theme }) => theme.colors.background};
	will-change: transform;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
	border-radius: 15px;
	overflow: hidden;

	&:hover {
		box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.2);
		transform: scale(1.03);
	}
`;
const NotFound: FC = () => (
	<Layout animate>
		<CenteredCard>
			<Text>The address you were looking for was not found.</Text>
			<ImageWrapper>
				<Image src={error} alt="" layout="fill" objectFit="cover" />
			</ImageWrapper>
			<Link href="/" passHref>
				<LinkText>Go home</LinkText>
			</Link>
		</CenteredCard>
	</Layout>
);

export default NotFound;
