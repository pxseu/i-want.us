import styled from "styled-components";

export const Line = styled.hr`
	width: 80%;
	height: 2px;
	border: 0;
	background-color: ${({ theme }) => theme.colors.card};
	margin-top: 20px;
`;
