import { GetServerSidePropsContext } from "next";
import React, { FC, useState } from "react";
import { Person } from "i-want.us";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Message as MessageType, Paths } from "@/conf/paths";
import MetaTags from "@/comp/MetaTags";
import Layout from "@/comp/layout";
import { theme } from "@/comp/Theme";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	if (typeof context.params?.path !== "string") return { notFound: true };

	const path = Paths[context.params.path];

	if (!path) return { notFound: true };

	const art = path.random();

	const response = await fetch(art.url);
	const json = await response.json();

	let author: Person = null;
	let reciever: Person = null;

	try {
		const queryFrom = context.query.from;
		if (typeof queryFrom === "string") author = queryFrom;
	} catch (e) {
		/* */
	}

	try {
		const queryTo = context.query.to;
		if (typeof queryTo === "string") reciever = queryTo;
	} catch (e) {
		/* */
	}

	return {
		props: {
			url: json.url,
			source: art.hostname,
			message: path.message(reciever, author),
			embed: path.embed(reciever, author),
			hostname: context.req.headers.host,
		},
	};
};

const Position = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* font-family: "Arvo", serif; */
	margin: 10px 20px;
	padding: 20px 20px;
	background-color: ${theme.colors.card};
	border-radius: 20px;
	box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.2);
`;

const Title = styled.p`
	text-align: center;
	color: ${theme.colors.background};
	margin-top: 20px;
	font-size: ${theme.fontSize.l};
	overflow-wrap: break-word;

	@media (max-width: 500px) {
		font-size: ${theme.fontSize.m};
	}

	@media (max-width: 200px) {
		font-size: ${theme.fontSize.s};
	}
`;

const Message = styled(Title)`
	margin-top: 10px;
`;

const Source = styled.p`
	font-size: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	text-align: center;
	color: ${theme.colors.background};
`;

const SourceLink = styled.a`
	color: ${theme.colors.background};
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	display: block;
`;

const ImageWrapper = styled.div`
	max-height: 300px;
	max-width: 600px;
	margin: 30px 10px;
	position: relative;
	background-color: ${theme.colors.background};
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

interface WaifuProps {
	hostname: string;
	url: string;
	message: MessageType;
	embed: string;
	source: string;
}

const DynamicWaifu: FC<WaifuProps> = ({ hostname, url, message: { message, title }, embed, source }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<Layout>
			<Position>
				<ContentWrapper>
					<MetaTags hostname={hostname} url={url} text={embed} />
					<Title>{title}</Title>
					<Message>{message}</Message>

					<ImageWrapper>
						<SkeletonTheme color={theme.colors.dots} highlightColor={theme.colors.darkDots}>
							{loaded || <Skeleton height={300} style={{ position: "sticky", top: 0, bottom: 0 }} />}

							<Image src={url} alt="A wholesome gif" onLoad={() => setLoaded(true)} hidden={!loaded} />
						</SkeletonTheme>
					</ImageWrapper>

					<Source>
						Source: <SourceLink href={source}>{source}</SourceLink>
					</Source>
				</ContentWrapper>
			</Position>
		</Layout>
	);
};

export default DynamicWaifu;
