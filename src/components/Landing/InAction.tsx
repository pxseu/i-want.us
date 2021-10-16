import React, { FC, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Line } from "../Line";
import { ContentWrapper, LowerSlogan } from "./common";
import CuddleInAction from "../../../public/assets/to-cuddle.png";
import KissInAction from "../../../public/assets/to-kiss.png";

const Images = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const wrapperVariants: Variants = {
	initial: {
		opacity: 0,
		y: 20,
	},
	loaded: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const ImageWrapper = styled(motion.div)`
	position: relative;
	margin: 10px;
`;

const InAction: FC = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inView) {
			controls.start("loaded");
		}
		if (!inView) {
			controls.start("initial");
		}
	}, [controls, inView]);

	return (
		<ContentWrapper>
			<Line />
			<LowerSlogan>Here it is in action</LowerSlogan>
			<Images initial="initial" animate={controls} transition={{ staggerChildren: 0.2, delay: 0.5 }} ref={ref}>
				<ImageWrapper variants={wrapperVariants}>
					<Image src={CuddleInAction} alt="" width={430} height={330} />
				</ImageWrapper>
				<ImageWrapper variants={wrapperVariants}>
					<Image src={KissInAction} alt="" width={430} height={330} />
				</ImageWrapper>
			</Images>
		</ContentWrapper>
	);
};
export default InAction;
