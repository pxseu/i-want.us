import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Line } from "../Line";
import { ContentWrapper, LowerSlogan } from "./common";
import Embed from "./Embed";
import { IN_ACTION } from "@/conf/inAction";

const Images = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	max-width: 1200px;
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
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("loaded");
		}
		// if (!inView) {
		// 	controls.start("initial");
		// }
	}, [controls, inView]);

	return (
		<ContentWrapper>
			<Line />
			<LowerSlogan>Here it is in action</LowerSlogan>
			<Images initial="initial" animate={controls} transition={{ staggerChildren: 0.2, delay: 0.5 }} ref={ref}>
				{IN_ACTION.map((data) => (
					<ImageWrapper variants={wrapperVariants} key={data.id}>
						<Embed title={data.title} url={data.url} />
					</ImageWrapper>
				))}
			</Images>
		</ContentWrapper>
	);
};
export default InAction;
