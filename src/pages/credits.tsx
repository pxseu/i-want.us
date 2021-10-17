import React, { FC } from "react";
import styled from "styled-components";
import CenteredCard from "@/comp/CenteredCard";
import Layout from "@/comp/layout";
import { alistair, pxseu, looskie, nekosLife, asunaGa } from "@/conf/externalUrls";
import { ExternalUrl } from "@/comp/Url";

const Title = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.colors.background};
	margin-top: 10px;
	font-size: ${({ theme }) => theme.fontSize.l};
	overflow-wrap: break-word;

	@media (max-width: 500px) {
		font-size: ${({ theme }) => theme.fontSize.m};
	}

	@media (max-width: 200px) {
		font-size: ${({ theme }) => theme.fontSize.s};
	}
`;

const Content = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.background};
	margin-top: 5px;
	padding: 5px;
`;

const Element = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.background};
	margin-top: 2px;
	padding: 0px;
`;

const Url = styled(ExternalUrl)`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.background};
	margin: 0;
`;

const CreateUrl: FC = () => (
	<Layout animate>
		<CenteredCard>
			<Title>Development</Title>
			<Content>
				<Element>
					<Url href={pxseu}>pxseu - Idea and Development</Url>
				</Element>
				<Element>
					<Url href={alistair}>Alistair - Domain name</Url>
				</Element>
				<Element>
					<Url href={looskie}>Looskie - Design and help</Url>
				</Element>
			</Content>

			<Title>Images</Title>
			<Content>
				<Element>
					<Url href={nekosLife}>Nekos.Life</Url>
				</Element>
				<Element>
					<Url href={asunaGa}>Asuna.ga</Url>
				</Element>
			</Content>
		</CenteredCard>
	</Layout>
);

export default CreateUrl;
