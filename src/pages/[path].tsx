import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
import { Person } from "i-want.us";
import styled from "styled-components";
import { Paths } from "@/conf/paths";
import MetaTags from "@/comp/MetaTags";
import Layout from "@/comp/layout";
import Embed from "@/comp/Embed";

interface WaifuProps {
	hostname: string;
	url: string;
	message: string;
	embed: string;
	source: string;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
): Promise<{ props: WaifuProps } | { notFound: boolean }> => {
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
			hostname: `${context.req.headers.host}/${context.params.path}`,
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

const DynamicWaifu: FC<WaifuProps> = ({ hostname, url, message, embed, source }) => (
	<Layout>
		<Position>
			<MetaTags hostname={hostname} url={url} text={embed} />
			<Embed title={message} url={url} source={source} large />
		</Position>
	</Layout>
);

export default DynamicWaifu;
