import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";

const Wrapper = (comp: FC | "div" = "div") => styled(comp)<{ large?: boolean }>`
	position: relative;
	max-width: ${({ large }) => (large ? "800px" : "333px")};
	margin: 5px;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	border-left: 3px solid ${({ theme }) => theme.colors.brand};
	padding: 10px;
	padding-right: 20px;
	background-color: ${({ theme }) => theme.colors.embed};
	box-shadow: ${({ theme }) => theme.shadow.light};

	transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

	&:hover {
		transform: scale(${({ large }) => (large ? 1.02 : 1.04)});
		box-shadow: ${({ theme }) => theme.shadow.hover};
	}

	${({ large, theme }) =>
		large &&
		`@media (max-width: ${theme.breakpoint.xlg}) {
		width: 333px;
	}`}

	@media (max-width: ${({ theme }) => theme.breakpoint.md}) {
		width: 288px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		width: 213px;
	}
`;

const WrapperDiv = Wrapper("div");
const WrapperMotion = Wrapper(motion.div);

const Domain = styled.a`
	font-size: 0.8em;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.brand};
	word-break: break-word;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	direction: rtl;
	text-align: left;
`;

const Title = styled.p`
	color: ${({ theme }) => theme.colors.fontDark};
	margin-top: 5px;
	font-size: 1.05rem;
	word-break: break-word;
	width: 100%;
`;

const Description = styled(Title)``;

const ImageWrapper = styled.div<{ large: boolean }>`
	display: flex;
	${({ large }) => !large && "flex-grow: 1;"};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	position: relative;
	overflow: hidden;
	width: ${({ large }) => (large ? "600px" : "300px")};
	height: ${({ large }) => (large ? "400px" : "200px")};
	background-color: ${({ theme }) => theme.colors.background};
	/* border-radius: 5px; */

	${({ large, theme }) =>
		large &&
		`@media (max-width: ${theme.breakpoint.xlg}) {
		width: 300px;
		height: 200px;
	}`}

	@media (max-width: ${({ theme }) => theme.breakpoint.md}) {
		width: 255px;
		height: 170px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		width: 180px;
		height: 120px;
	}
`;

const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: inherit;
	object-fit: contain;
`;

const Source = styled(Title)`
	font-size: 1.1rem;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const SourceLink = styled.a`
	color: ${({ theme }) => theme.colors.brand};
`;

interface EmbedProps {
	hostname?: string;
	title: string;
	url: string;
	description?: string;
	large?: boolean;
	source?: string;
	motion?: boolean;
	motionProps?: MotionProps;
}

const shortenHostname = (hostname: string) => {
	return hostname;
	const parts = hostname.split(".");
	if (parts.length > 2) {
		return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
	}
	return hostname;
};

const Embed: FC<EmbedProps> = ({
	hostname,
	title,
	url,
	description,
	large = false,
	source,
	motion: useMotion = false,
	motionProps,
}) => {
	const WrapperComponent = useMotion ? WrapperMotion : WrapperDiv;
	const [state, setState] = useState(hostname ?? "i-want.us");
	const [href, setHref] = useState<string | undefined>();

	useEffect(() => {
		if (large) setHref(window.location.href);
		if (!hostname)
			setState(
				`${shortenHostname(window.location.hostname)}${
					window.location.pathname.startsWith("/to-") ? window.location.pathname : ""
				}`,
			);
	}, [large, hostname]);

	return (
		<WrapperComponent large={large} {...(useMotion ? motionProps : null)}>
			<Domain href={href}>{state}</Domain>
			<Title>{title}</Title>
			{description && <Description>{description}</Description>}
			<ImageWrapper large={large}>
				<Image src={url} alt="" />
			</ImageWrapper>
			{source && (
				<Source>
					• Source: <SourceLink href={source}>source</SourceLink>
				</Source>
			)}
		</WrapperComponent>
	);
};
export default Embed;
