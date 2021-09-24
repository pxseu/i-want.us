import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface IWaifuCard {
	title: string;
	image: string;
	className?: string;
}

const fronte = keyframes`
	from {
		background: none;
	}

	to {
		z-index: 4;
		transform: scale(1.03);
		opacity: 1;
		box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.315);
	}
`;

const stackOut = keyframes`
	from {
		margin-left: -470px;
	}
	to {
		margin-left: -80px;
	}
`;

const Wrapper = styled.div`
	position: relative;
	height: 540px;
	width: 470px;
	overflow: visible;
	box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors.font};

	&::after {
		content: "";
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.font};
		position: absolute;
		border-radius: 7px;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0.9;
	}

	/* &:hover {
		animation: ${fronte} 0.3s ease-in-out forwards;
	} */

	&:nth-of-type(1) {
		z-index: 2;
		transform: rotate(-2deg);
	}

	&:nth-of-type(2) {
		transform: rotate(2deg);
		margin-left: -80px;
		background-color: ${({ theme }) => theme.colors.card};

		&::after {
			background-color: ${({ theme }) => theme.colors.card};
		}
		animation: ${stackOut} 0.4s ease-out forwards;
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const Title = styled.h3`
	position: absolute;
	margin-left: 0.35em;
	font-family: Poppins;
	font-style: normal;
	font-weight: 900;
	font-size: 3.7em;
	line-height: 1.5em;
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.background};
	user-select: none;
`;

const Image = styled.img`
	display: block;
	margin-left: -3.8em;
	height: 540px;
	user-select: none;
	pointer-events: none;
`;

const WaifuCard: FC<IWaifuCard> = ({ title, image }) => (
	<Wrapper>
		<Title>{title}</Title>
		<ImageWrapper>
			<Image src={image} alt="A cute anime girl" />
		</ImageWrapper>
	</Wrapper>
);

export default WaifuCard;

/*
@media screen and (min-width: 481px) and (max-width: 950px) {
	.waifuWrapper {
		height: #{$wrapperHeigth * 0.8};
		width: #{$wrapperWidth * 0.8};
	}

	.waifuImage {
		display: block;
		margin-left: -3.5em;
		height: #{$imageHeigth * 0.8};
	}

	.cardTitle {
		font-size: 3.7em;
	}
}

@media screen and (max-width: 480px) {
	.waifuWrapper {
		height: #{$wrapperHeigth * 0.6};
		width: #{$wrapperWidth * 0.6};
	}

	.waifuImage {
		display: block;
		margin-left: -3.5em;
		height: #{$imageHeigth * 0.6};
	}
	.cardTitle {
		font-size: 3.5em;
	}
}

@keyframes fronte {
	
} */
