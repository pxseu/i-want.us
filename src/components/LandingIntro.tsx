import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { InternalUrl } from "./Url";
import WaifuCard from "./WaifuCard";
import CuddleInAction from "../../public/assets/to-cuddle.png";
import KissInAction from "../../public/assets/to-kiss.png";

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Slogan = styled.h1`
	margin-top: 20px;
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
	padding: 50px 0;
	overflow-x: hidden;
	margin-top: 1em;
	display: flex;
	justify-content: center;
`;

const LowerSlogan = styled(Slogan)`
	font-size: 3.5em;
`;

const MainText = styled(Slogan)`
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Url = styled(InternalUrl)`
	margin-left: 0;
	font-size: ${({ theme }) => theme.fontSize.s};
`;

const Line = styled.hr`
	width: 80%;
	height: 2px;
	border: 0;
	background-color: ${({ theme }) => theme.colors.card};
	margin-top: 20px;
`;

const Images = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
	margin: 10px;
`;

const LandingIntro: FC = () => {
	const router = useRouter();

	return (
		<>
			<ContentWrapper>
				<Slogan>
					Show your love <Attention>without</Attention> the stress
				</Slogan>
			</ContentWrapper>

			<CardWrapper>
				<WaifuCard title="cuddle" image="/assets/cuddle-girl.png" onClick={() => router.push("/to-cuddle")} />
				<WaifuCard
					title="kiss"
					image="/assets/kiss-girl.png"
					secondary
					onClick={() => router.push("/to-kiss")}
				/>
			</CardWrapper>

			<ContentWrapper>
				<Line />
				<LowerSlogan>Here&apos;s it in action</LowerSlogan>
				<Images>
					<ImageWrapper>
						<Image src={CuddleInAction} height={330} width={430} alt="" />
					</ImageWrapper>
					<ImageWrapper>
						<Image src={KissInAction} height={330} width={430} alt="" />
					</ImageWrapper>
				</Images>
			</ContentWrapper>

			<ContentWrapper>
				<Line />
				<LowerSlogan>Sounds like something for you?</LowerSlogan>
				<MainText>
					<Attention>Try it out in</Attention> <Url href="/url">/url</Url>
				</MainText>
			</ContentWrapper>
		</>
	);
};

export default LandingIntro;
