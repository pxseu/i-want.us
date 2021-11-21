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
	font-size: ${({ theme }) => theme.fontSize.m};
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.background};
	margin-left: 30px;
	margin-top: 5px;
	padding: 5px;
`;

const Element = styled.li`
	color: ${({ theme }) => theme.colors.background};
	margin-top: 2px;
	padding: 0px;
`;

const Url = styled(ExternalUrl)`
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.background};
	text-decoration: underline;
`;

const CreateUrl: FC = () => (
	<Layout animate>
		<CenteredCard>
			<Title>Development 🧰</Title>
			<Content>
				<Element>
					<Url href={pxseu}>pxseu</Url> - Idea and Development
				</Element>
				<Element>
					<Url href={alistair}>Alistair </Url> - Domain name
				</Element>
				<Element>
					<Url href={looskie}>Looskie</Url> - Design and help
				</Element>
			</Content>

			<Title>Images 🖼️</Title>
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
