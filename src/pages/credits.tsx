import React, { FC } from "react";
import styled from "styled-components";
import CenteredCard from "@/comp/CenteredCard";
import Layout from "@/comp/layout";
import { alistair, pxseu, looskie } from "@/conf/externalUrls";
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

const Person = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.background};
	margin-top: 5px;
	padding: 2px;
`;

const Url = styled(ExternalUrl)`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.background};
	margin: 0;
`;

const CreateUrl: FC = () => (
	<Layout animate>
		<CenteredCard>
			<Title>Credits</Title>
			<Content>
				<Person>
					<Url href={pxseu}>pxseu - Idea and Development</Url>
				</Person>
				<Person>
					<Url href={alistair}>Alistair - Domain name</Url>
				</Person>
				<Person>
					<Url href={looskie}>Looskie - Design and help</Url>
				</Person>
			</Content>
		</CenteredCard>
	</Layout>
);

export default CreateUrl;
