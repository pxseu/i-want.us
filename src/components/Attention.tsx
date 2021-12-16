import { motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, FC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { theme } from "./Theme";

const backgroundVariants: Variants = {
	initial: {
		width: 0,
	},
	loaded: {
		width: "100%",
		transition: {
			type: "spring",
			bounce: 0.33,
			duration: 1,
		},
	},
};

const textVariants: Variants = {
	initial: {
		color: theme.colors.brand,
	},
	loaded: {
		color: theme.colors.background,
		transition: {
			type: "keyframes",
			duration: 0.5,
		},
	},
};

const AttentionComp = styled(motion.span)`
	position: relative;
	z-index: 1;
	padding: 5px 10px;
	overflow: hidden;
	border-radius: 15px;

	@media (max-width: ${theme.breakpoint.md}) {
		padding: 5px;
	}
`;

const AttentionText = styled(motion.span)`
	color: ${theme.colors.background};
	font-weight: bolder;
`;

const Background = styled(motion.span)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	z-index: -1;
	border-radius: inherit;
	background-color: ${theme.colors.brand};
`;

interface AttentionProps {
	animate?: boolean;
}

export const Attention: FC<AttentionProps> = ({ children, animate }) => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView || animate) {
			controls.start("loaded");
		}
		if (!inView && !animate) {
			controls.start("initial", { duration: 0 });
		}
	}, [controls, inView, animate]);

	return (
		<AttentionComp
			initial="initial"
			animate={controls}
			ref={ref}
			transition={{ delayChildren: 1, staggerChildren: 1, staggerDirection: -1 }}
		>
			<AttentionText variants={textVariants}>{children}</AttentionText>
			<Background variants={backgroundVariants} />
		</AttentionComp>
	);
};
