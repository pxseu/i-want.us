import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Line } from "../Line";
import { ContentWrapper, LowerSlogan } from "./common";
import Embed from "../Embed";
import { IN_ACTION } from "@/conf/inAction";

const Images = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	max-width: 1200px;
	flex-shrink: 1;
	/* @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		justify-content: left;
		align-items: left;
	} */
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
					<Embed
						title={data.title}
						url={data.url}
						motion
						motionProps={{ variants: wrapperVariants, style: { opacity: 1, y: 0 } }}
						key={data.id}
					/>
				))}
			</Images>
		</ContentWrapper>
	);
};
export default InAction;
