import React, { FC } from "react";
import styled from "styled-components";
import { Attention } from "../Attention";
import { Line } from "../Line";
import { InternalUrl } from "../Url";
import { LowerSlogan, Slogan } from "./common";

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MainText = styled(Slogan)`
	font-size: ${({ theme }) => theme.fontSize.l};
`;

const Url = styled(InternalUrl)`
	margin-left: 0;
	font-size: ${({ theme }) => theme.fontSize.s};
`;

const UserQuestion: FC = () => (
	<ContentWrapper>
		<Line />
		<LowerSlogan>Sounds good?</LowerSlogan>
		<MainText>
			<Attention letterSpacing={0.023}>Try it out in</Attention> <Url href="/url">/url</Url>
		</MainText>
	</ContentWrapper>
);

export default UserQuestion;
