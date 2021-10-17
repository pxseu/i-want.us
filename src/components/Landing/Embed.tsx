import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

interface EmbedProps {
	title: string;
	url: string;
}

const Wrapper = styled.div`
	max-width: 500px;
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

	transition: all 0.1s ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: ${({ theme }) => theme.shadow.hover};
	}
`;

const Domain = styled.p`
	font-size: 0.8rem;
	font-weight: bold;
`;

const Title = styled.p`
	font-size: 0.95rem;
	word-break: break-word;
`;

const ImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	position: relative;
	overflow: hidden;
	width: 300px;
	height: 200px;
`;

const Image = styled.img`
	position: relative;
`;

const Embed: FC<EmbedProps> = ({ title, url }) => {
	const [state, setState] = useState("i-want.us");

	useEffect(() => {
		setState(window.location.hostname);
	}, []);

	return (
		<Wrapper>
			<Domain>{state}</Domain>
			<Title>{title}</Title>
			<ImageWrapper>
				<Image src={url} alt="" />
			</ImageWrapper>
		</Wrapper>
	);
};
export default Embed;
