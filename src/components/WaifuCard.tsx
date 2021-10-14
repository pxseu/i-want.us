import React, { FC } from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";

interface WrapperProps {
	secondary?: boolean;
	"data-rotate"?: string;
}

const initialMargin = 80;
const finalMargin = -80;

const Wrapper = styled(motion.div as FC<WrapperProps & HTMLMotionProps<"div">>)`
	position: relative;
	height: 540px;
	width: 470px;
	overflow: visible;
	box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	--rotate: ${(props) => props["data-rotate"]};
	--final-margin: ${({ secondary }) => (secondary ? finalMargin : 0)}px;
	${({ secondary }) => (secondary ? `margin-left: ${finalMargin}px;` : "z-index: 2;")}
	transform: rotate(var(--rotate));
	transition: all 0.1s ease-out;

	&::after {
		content: "";
		width: 100%;
		height: 100%;
		background-color: ${({ theme, secondary }) => (secondary ? theme.colors.card : theme.colors.font)};
		position: absolute;
		border-radius: 7px;
		top: 0;
		left: 0;
		z-index: -1;
		cursor: pointer;
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

interface IWaifuCard {
	title: string;
	image: string;
	secondary?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const WaifuCard: FC<IWaifuCard> = ({ title, image, secondary, onClick }) => {
	const rotate = secondary ? 2 : -2;
	const margin = secondary ? finalMargin : 0;

	return (
		<Wrapper
			variants={{
				initial: {
					zIndex: secondary ? 2 : 4,
				},
				hover: {
					marginLeft: [`${margin}px`, `${margin * -0.5}px`, `${margin}px`],
					transform: [`rotate(${rotate}deg) scale(1)`, `rotate(${rotate * 0.5}deg) scale(1.03)`],
					zIndex: 4,
					boxShadow: [undefined, undefined, "0px 0px 25px 2px rgba(0, 0, 0, 0.4)"],
				},
				loaded: { marginLeft: secondary ? [initialMargin, finalMargin] : undefined },
			}}
			animate="loaded"
			transition={{ duration: 0.5, ease: "circOut" }}
			initial="initial"
			whileHover="hover"
			secondary={secondary}
			onClick={onClick}
			data-rotate={`${rotate}deg`}
		>
			<Title>{title}</Title>
			<ImageWrapper>
				<Image src={image} alt="A cute anime girl" />
			</ImageWrapper>
		</Wrapper>
	);
};

export default WaifuCard;
