import React, { FC } from "react";
import styled from "styled-components";
import WaifuCard from "./WaifuCard";

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Slogan = styled.h1`
	max-width: 600px;
	font-style: normal;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSize.xxl};
	line-height: 1.5em;
	text-align: center;
	color: ${({ theme }) => theme.colors.font};
`;

const Attention = styled.span`
	font-weight: 800;
	color: ${({ theme }) => theme.colors.brand};
`;

const CardWrapper = styled.div`
	padding: 30px 0;
	overflow-x: hidden;
	margin-top: 1em;
	display: flex;
	justify-content: center;
`;

const LandingIntro: FC = () => (
	<>
		<ContentWrapper>
			<Slogan>
				Show your love <Attention>without</Attention> the stress
			</Slogan>
		</ContentWrapper>
		<CardWrapper>
			<WaifuCard title="cuddle" image="/assets/cuddle-girl.png" />
			<WaifuCard title="kiss" image="/assets/kiss-girl.png" />
		</CardWrapper>
	</>
);

export default LandingIntro;
