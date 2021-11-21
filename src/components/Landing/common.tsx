import styled from "styled-components";

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Slogan = styled.h1`
	margin: 20px 0.5em;
	margin-top: 20px;
	margin-bottom: 20px;
	max-width: 700px;
	font-style: normal;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSize.xxl};
	line-height: 1.5em;
	text-align: center;
	color: ${({ theme }) => theme.colors.font};
	/* word-break: break-word; */

	@media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.md}) {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const LowerSlogan = styled(Slogan)`
	font-size: 3.5em;
`;
