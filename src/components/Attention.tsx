import { HTMLMotionProps, motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, FC } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { theme } from "./Theme";

const wrapperVariants: Variants = {
	initial: {
		backgroundPosition: "200%",
	},
	loaded: {
		backgroundPosition: "100%",
		transition: {
			type: "spring",
			bounce: 0.33,
			duration: 1,
			delay: 0.3,
			delayChildren: 0.6,
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
	padding: 5px 15px;
	background: linear-gradient(to left, ${theme.colors.brand} 50%, transparent 50%);
	background-size: 200% 100%;
	background-position: 100% 100%;
	color: ${theme.colors.background};
	border-radius: 15px;
`;

interface AttentionProps {
	letterSpacing?: number;
	animate?: boolean;
}

const AttentionText = styled(motion.span as FC<AttentionProps & HTMLMotionProps<"span">>)`
	/* padding: 0px 20px; */
	font-weight: bolder;
	letter-spacing: ${({ letterSpacing }) => letterSpacing ?? 0.0255}rem;
`;

export const Attention: FC<AttentionProps> = ({ children, letterSpacing, animate }) => {
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
		<AttentionComp variants={wrapperVariants} initial="initial" animate={controls} ref={ref}>
			<AttentionText letterSpacing={letterSpacing} variants={textVariants}>
				{children}
			</AttentionText>
		</AttentionComp>
	);
};
