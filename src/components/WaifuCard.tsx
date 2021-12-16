import React, { FC } from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface WrapperProps {
	secondary?: boolean;
	"data-rotate"?: string;
}

const initialMargin = 80;
const finalMargin = -80;

const Wrapper = styled(motion.div as FC<WrapperProps & HTMLMotionProps<"div">>)`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 540px;
	width: 440px;
	box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	--rotate: ${(props) => props["data-rotate"]};
	--final-margin: ${({ secondary }) => (secondary ? finalMargin : 0)}px;
	${({ secondary }) => (secondary ? `margin-left: ${finalMargin}px;` : "z-index: 2;")}
	transform: rotate(var(--rotate));
	cursor: pointer;
	background-color: ${({ theme, secondary }) => (secondary ? theme.colors.fontDark : theme.colors.font)};

	@media (max-width: ${({ theme }) => theme.breakpoint.xlg}) {
		font-size: 0.8rem;
		height: 440px;
		width: 340px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
		height: 350px;
		width: 270px;
		font-size: 0.7rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.md}) {
		font-size: 0.6rem;
		height: 300px;
		width: 244px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		font-size: 0.5rem;
		height: 240px;
		width: 170px;
	}
`;

const Title = styled.h3`
	margin-left: 0.5em;
	font-family: Poppins;
	font-style: normal;
	font-weight: 900;
	font-size: 3.2em;
	text-align: left;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.background};
	user-select: none;
`;

const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: inherit;
	object-fit: cover;
	user-select: none;
`;

const Anchor = styled.a`
	text-decoration: none;
	color: inherit;
`;

interface IWaifuCard {
	title: string;
	image: string;
	secondary?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	path?: string;
}

const WaifuCard: FC<IWaifuCard> = ({ title, image, secondary, onClick, path = "" }) => {
	const rotate = secondary ? 2 : -2;
	const margin = secondary ? finalMargin : 0;
	const variants = {
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
	};

	return (
		<Link href={path} passHref>
			<Anchor>
				<Wrapper
					variants={variants}
					animate="loaded"
					transition={{ duration: 0.5, ease: "circOut" }}
					initial="initial"
					whileHover="hover"
					whileFocus="hover"
					secondary={secondary}
					onClick={onClick}
					data-rotate={`${rotate}deg`}
				>
					<Title>{title}</Title>

					<Image src={image} alt="A cute anime girl" />
				</Wrapper>
			</Anchor>
		</Link>
	);
};

export default WaifuCard;
