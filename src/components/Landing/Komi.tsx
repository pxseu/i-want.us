import { motion, useAnimation, Variants } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import komi from "../../../public/assets/komi.png";

const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	/* background-color: #fafafa; */
	overflow: hidden;
`;

const variants: Variants = {
	initial: {
		transform: "translateY(55%)",
	},
	loaded: {
		transform: "translateY(10%)",
		transition: {
			type: "spring",
			stiffness: 100,
			bounce: 0.5,
			duration: 0.5,
		},
	},
};

const StyledImage = styled(motion.img)`
	display: inline !important;
	transform: translateY(55%);
`;

const Komi: FC = () => {
	const controler = useAnimation();
	const { ref, inView } = useInView({ threshold: 0.8 });

	useEffect(() => {
		if (inView) {
			controler.start("loaded");
		}
		if (!inView) {
			controler.start("initial");
		}
	}, [inView, controler]);

	return (
		<Wrapper ref={ref}>
			<StyledImage src={komi.src} alt="" variants={variants} initial="initial" animate={controler} />
		</Wrapper>
	);
};
export default Komi;
