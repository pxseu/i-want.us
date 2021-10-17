import React, { FC } from "react";
import styled from "styled-components";

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
	padding: 20px 30px;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 20px;
	box-shadow: ${({ theme }) => theme.shadow.primary};
`;

const CenteredCard: FC = ({ children }) => (
	<Position>
		<ContentWrapper>{children}</ContentWrapper>
	</Position>
);

export default CenteredCard;
