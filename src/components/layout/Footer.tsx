import React, { FC } from "react";
import styled from "styled-components";
import { github } from "@/conf/externalUrls";
import { ExternalUrl } from "../Url";

const Footer = styled.footer`
	display: flex;
	width: 100%;
	padding: ${({ theme }) => theme.fontSize.m};
	padding-bottom: ${({ theme }) => theme.fontSize.s};
	background-color: ${({ theme }) => theme.colors.header};
	backdrop-filter: blur(5px);
	justify-content: center;
	align-items: center;
	padding: 6px 15px;
	/* margin-top: 30px; */
	margin: 0;
	z-index: 10;
`;

const Text = styled.p`
	color: ${({ theme }) => theme.colors.fontDark};
	text-align: center;
`;

const Url = styled(ExternalUrl)`
	margin: 0;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.fontDark};
`;

const CompFooter: FC = () => (
	<Footer>
		<Text>
			<Url href={github}>Made with ❤ on Github</Url>
		</Text>
	</Footer>
);

export default CompFooter;
