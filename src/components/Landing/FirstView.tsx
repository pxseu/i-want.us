import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import { Attention } from "../Attention";
import WaifuCard from "../WaifuCard";
import { ContentWrapper, Slogan } from "./common";
import cuddle from "../../../public/assets/cuddle-girl.png";
import kiss from "../../../public/assets/kiss-girl.png";

const CardWrapper = styled.div`
	padding: 50px 0;
	overflow-x: hidden;
	margin-top: 1em;
	display: flex;
	justify-content: center;
`;

const FirstView: FC = () => {
	const router = useRouter();

	return (
		<div>
			<ContentWrapper>
				<Slogan>
					Show your love <Attention>without</Attention> the stress
				</Slogan>
			</ContentWrapper>
			<CardWrapper>
				<WaifuCard title="cuddle" image={cuddle.src} onClick={() => router.push("/to-cuddle")} />
				<WaifuCard title="kiss" image={kiss.src} secondary onClick={() => router.push("/to-kiss")} />
			</CardWrapper>
		</div>
	);
};

export default FirstView;
