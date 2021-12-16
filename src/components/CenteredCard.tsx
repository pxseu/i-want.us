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

const Wrapper = styled.div`
	max-width: 800px;
	margin: 70px;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	padding: 10px;
	padding-right: 20px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.fontDark};
	box-shadow: ${({ theme }) => theme.shadow.light};
`;

const CenteredCard: FC = ({ children }) => (
	<Position>
		<Wrapper>{children}</Wrapper>
	</Position>
);

export default CenteredCard;
